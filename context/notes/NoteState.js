import { React, useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const s1 = {
        name: "faizan malik ",
    }

    const [state, setState] = useState(s1);

    const update = () => {

        setTimeout(() => {

            setState({name: "hey this is faizan here"}) 


        }, 2000);

    }

    return (
        <NoteContext.Provider value={{state , update}}>
            {props.children}
        </NoteContext.Provider>
    )
} 



export default NoteState;