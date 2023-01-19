// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Notes from "@/models/Notes";


export default async function handler(req, res) {
    const notes = await Notes.find({token:req.body.token})
    res.status(200).json({ notes });
  }