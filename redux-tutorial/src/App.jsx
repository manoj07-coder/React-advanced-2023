import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/cartContainer'
import { useDispatch,useSelector } from 'react-redux'
import { calculateTotal, getCartItems } from './features/cart/cartSlice.js'
import Modal from './components/Modal.jsx'


const App = () => {

  const dispatch = useDispatch();

  const {cartItems,isLoading} = useSelector((store)=>store.cart);
  const {isOpen} = useSelector((store)=>store.modal)

  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItems]);

  useEffect(()=>{
    dispatch(getCartItems())
  },[])

  if(isLoading){
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal /> }
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App