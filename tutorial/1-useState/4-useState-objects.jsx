import React, { useState } from "react";

function UseStateObjects (){

    const [person, setPerson] = useState({name:'Peter',age:23,message:'Random Message'})

    const changeValue = () => {
        setPerson({...person,message:'Hello People'})
    }

    return (
        <>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        <button className="btn" onClick={changeValue}>Change values</button>
        </>
    )
}

export default UseStateObjects