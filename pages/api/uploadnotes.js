import Notes from '../../models/Notes'
import connectDb from '../../middleware/mongoose'

const handler = async (req,res)=>{

    if (req.method == 'POST'){

        let newNotes = new Notes({
          user: req.body.id,
          token: req.body.token,
          title: req.body.title,
          description: req.body.description,
          tag: req.body.tag,
          })
        await newNotes.save();

      res.status(200).json({ success: "Notes added succesfully!" })

    }

}
export default connectDb(handler);