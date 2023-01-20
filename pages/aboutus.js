import { React, useContext, useEffect } from 'react'
import NoteContext from '@/context/notes/noteContext'

const aboutus = () => {

  const note = useContext(NoteContext)

  useEffect(() => {
    note.update();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container min-h-screen'>
        <h1>aboutus {note.state.name} with {note.state.email}</h1> 
    </div>
  )
}

export default aboutus;