import React, { useState, useEffect } from "react";

function UseEffectBasics (){

    const [value,setValue] = useState(0)

    useEffect(()=>{
        console.log('Call useEffect')
        if(value > 0){
            document.title = `new messages(${value})`
        }
    },[value])

    console.log('Render component')

    return (
        <>
        <h2>Count</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={()=>setValue(value + 1)}>Click Me</button>
        </>
    )
}

export default UseEffectBasics