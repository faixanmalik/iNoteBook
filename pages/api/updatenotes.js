import Notes from '../../models/Notes'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{

    if (req.method == 'PUT'){
        const {title, description , tag } = req.body;

        const newNotes = {}
        if(title) newNotes.title = title;
        if(description) newNotes.description = description;
        if(tag) newNotes.tag = tag;

        const note =  await Notes.findOne({token: req.body.token})
        if(!note){
         return res.status(404).json({message: 'Note not found'})
        }

        if(note.token != req.body.token){
            return res.status(401).json({message: 'Not authorized'})
        }

        else{
            await Notes.updateOne({token: req.body.token},{$set: newNotes})
            return res.status(200).json({message: 'Note updated', note})
        } 

    }

}
export default connectDb(handler);