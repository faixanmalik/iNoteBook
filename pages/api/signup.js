import User from '../../models/User'
import connectDb from '../../middleware/mongoose'
const bcrypt = require('bcrypt');

const handler = async (req,res)=>{

    if (req.method == 'POST'){
      let user = await User.findOne({email: req.body.email})
      
      if (user){
        return res.status(400).json({error: 'User already exists'})
      }

      else{
        // here 10 is salt
        let secPassword = await bcrypt.hash(req.body.password, 10)

        let newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: secPassword,
          })
        await newUser.save();

      res.status(200).json({ success: "User added succesfully!" })
      }

    }
}

export default connectDb(handler);