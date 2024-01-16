import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../features/modal/modalSlice.js'
import { clearCart } from '../features/cart/cartSlice.js'

const Modal = () => {

    const dispatch = useDispatch()

  return (
    <div className='modal-container'>
        <div className='modal'>
            <h4>Remove all items  from your shopping cart?</h4>
            <div className='btn-container'>
                <button type='button' className='btn confirm-btn'
                onClick={()=>{
                    dispatch(clearCart());
                    dispatch(closeModal())
                }}>
                    confirm
                </button>
                <button type='button' className=' btn clear-btn'
                onClick={()=>{
                    dispatch(closeModal());
                }}>
                    cancel
                </button>
            </div>
        </div>
    </div>
  )
}

export default Modal