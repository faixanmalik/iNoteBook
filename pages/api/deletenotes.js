import Notes from '../../models/Notes'
import connectDb from '../../middleware/mongoose'



const handler = async (req,res)=>{

    if (req.method == 'DELETE'){
        let note =  await Notes.findById(req.query.id)
        if(!note){
         return res.status(404).json({message: 'Note not found'})
        }

        if(note.id != req.query.id){
            return res.status(401).json({message: 'Not authorized'})
        }

        else{
            await Notes.findByIdAndDelete(req.query.id)
            return res.status(200).json({ message: 'Note Deleted' })
        } 

    }

}
export default connectDb(handler);