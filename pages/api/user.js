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
        let newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          })
        await newUser.save();

      res.status(200).json({ success: "User added succesfully!" })
      }

    }
}

export default connectDb(handler);