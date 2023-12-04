import React from "react";

const ErrorExample = () => {
    const title = 'Random Title';
    const handleClick = () => {
        console.log(title)
    }
    return (
        <>
        <h2>{title}</h2>
        <button className="btn" onClick={handleClick}>Change title</button>
        </>
    )
}

export default ErrorExample;