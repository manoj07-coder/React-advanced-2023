import React, { useState } from "react";

function UseStateCounter () {
const [value, setValue] = useState(0);

const Reset = () => {
    setValue(0)
}

const complexIncrease = () => {
    setTimeout(()=>{
        setValue((prevValue)=>{
            return prevValue + 1
        })
    },2000)
}

    return (
        <>
        <section className="section">
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={()=> setValue(value - 1)}>Decrease</button>
        <button className="btn" onClick={Reset}>Reset</button>
        <button className="btn" onClick={()=> setValue(value + 1)}>Increase</button>
        </section>
        <section>
        <h2>More complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>Increase</button>
        </section>
        </>
    )
}

export default UseStateCounter;