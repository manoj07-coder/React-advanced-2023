import React, { useState } from "react";

function ShortCircuitEvalutaion(){

    const [ text, setText ] = useState('')
    const [isError, setIsError] = useState(false)

    return (
        <>
        <h2>{text || 'Manoj Sulyakodi'}</h2>
        <button className="btn" onClick={()=>setIsError(!isError)}>Toggle error</button>
        {isError && <h2>Error...</h2> }
        {isError ? <p>There is an error...</p> : <p>There is no error..</p>}

        </>
    )
}

export default ShortCircuitEvalutaion