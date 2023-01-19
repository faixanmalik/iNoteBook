import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handler = async (req,res)=>{

    if (req.method == 'POST'){
      let user = await User.findOne({email: req.body.email})
      
      if (!user){
        return res.status(400).json({error: 'User not exists'})
      }

      else{
        // Match Password
        let matchPassword = await bcrypt.compare(req.body.password, user.password)
        
        if(!matchPassword){
            return res.status(400).json({error: 'Please enter the valid credentials'})
        }
        else{
            let jwtToken = jwt.sign({email: req.body.email}, process.env.JWT_SECRET)
            return res.status(200).json({success: "User added succesfully!", jwtToken})
        }



      }

    }
}

export default connectDb(handler);