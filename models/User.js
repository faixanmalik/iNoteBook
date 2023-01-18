const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  date: {type: Date, default: Date.now}

  },{timestamps:true});
   

mongoose.models = {}
export default mongoose.model("User", UserSchema);