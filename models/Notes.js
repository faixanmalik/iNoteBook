const mongoose = require('mongoose');


const NotesSchema = new mongoose.Schema({
    token: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    tag: { type: String , default: 'General' },
    date: {type: Date, default: Date.now},

  });

mongoose.models={}
module.exports= mongoose.model('Notes', NotesSchema);