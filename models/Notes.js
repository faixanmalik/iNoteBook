const mongoose = require('mongoose');


const NotesSchema = new mongoose.Schema({
    noteId: {type: Number, required: true, unique: true , default: Math.floor(Math.random() * 7934582347589234)},
    token: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    tag: { type: String , default: 'General' },
    date: {type: Date, default: Date.now},

  });

mongoose.models={}
module.exports= mongoose.model('Notes', NotesSchema);