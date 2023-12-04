import React from "react";
import { useState } from "react";

function UseStateBasics () {

    const [text,setText] = useState('Random Title')

    const handleChange = () => {
        if(text === 'Random Title'){
            setText('Hello People')
        }else{
            setText('Random Title')
        }
    }
    return (
        <>
        <h2>{text}</h2>
        <button className="btn" onClick={handleChange}>Change title</button>
        </>
    )
}

export default UseStateBasics