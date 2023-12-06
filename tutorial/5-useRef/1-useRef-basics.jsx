import React, { useRef } from 'react';

function UseRefBasics(){

    const refContainer = useRef(null);
    const divContainer = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(refContainer.current.value)
        console.log(divContainer.current)
    }

    

    return (
        <>
        <form className='form' onSubmit={handleSubmit}>
            <div>
                <input type="text" ref={refContainer} />
                <button type='submit'>Submit</button>
            </div>
        </form>
        <div ref={divContainer}>Hello World</div>
        </>
    )
}

export default UseRefBasics