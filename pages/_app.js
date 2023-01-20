import '@/styles/globals.css'
import NoteState from '@/context/notes/NoteState'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Notes from '@/models/Notes'

export default function App({ Component, pageProps }) {
  return <>
  <NoteState>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </NoteState>

  </>
}
