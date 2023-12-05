import React, { useEffect, useState } from "react";

function UseEffectCleanup (){

    const [size, setSize] = useState(window.innerWidth)

const checkSize = ()=>{
    setSize(window.innerWidth)
}

    useEffect(()=>{
        window.addEventListener('resize',checkSize)
        // return ()=>{
        //     window.removeEventListener('resize',checkSize)
        // }
    },[])

    return (
        <>
        <h2>Window Size</h2>
        <h1>{size}px</h1>
        </>
    )
}

export default UseEffectCleanup