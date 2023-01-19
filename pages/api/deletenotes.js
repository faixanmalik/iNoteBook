import Notes from '../../models/Notes'
import connectDb from '../../middleware/mongoose'
import { useRouter } from 'next/router'

const router = useRouter;
const handler = async (req,res, context)=>{

    if (req.method == 'DELETE'){
        console.log(req.body)
        console.log(context)
        let note =  await Notes.findById({id: router.query.id})
        console.log(note)
        if(!note){
         return res.status(404).json({message: 'Note not found'})
        }

        if(note.id != req.body.id){
            return res.status(401).json({message: 'Not authorized'})
        }

        else{
            await Notes.findByIdAndDelete({id: req.body.id})
            return res.status(200).json({ message: 'Note Deleted' })
        } 

    }

}
export default connectDb(handler);