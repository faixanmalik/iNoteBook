import User from '../../models/User'
import connectDb from '../../middleware/mongoose'

// Jwt token
var jwt = require('jsonwebtoken');

const handler = async (req,res)=>{

    if (req.method == 'POST'){
        try {

        let token = req.body.token;
        let user = jwt.verify(token, process.env.JWT_SECRET);
        let dbuser = await User.findOne({"email": user.email})
    
        // working
        const { id, firstname, lastname, email } = dbuser

        res.status(200).json({ success: true , id,  firstname, lastname, email })

        } catch (error) {
            res.status(400).json({ success: false , message: "No user Found!" })
        }
        
    }
    else{
        res.status(400).json({ success: false , message: "No user Found!" })
    }

}
export default connectDb(handler);