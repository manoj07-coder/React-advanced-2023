import React, { useEffect } from 'react';

function Modal({modalContent,modalClose}){

    useEffect(()=>{
       setTimeout(()=>{
        modalClose();
       },3000)
    })

    return (
        <div className='modal'>
        <p>{modalContent}</p>
        </div>
    )
}

export default Modal;