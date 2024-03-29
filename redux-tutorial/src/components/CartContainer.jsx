import React from 'react'
import CartItem from './cartItem'
import { useDispatch,useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice.js'
import { openModal } from '../features/modal/modalSlice.js'

const CartContainer = () => {

    const {cartItems,amount,total} = useSelector((store)=>store.cart)
    const dispatch = useDispatch()

    if(amount < 1){
        return (
    <section className='cart'>
        <header>
            <h2>Your bag</h2>
            <h4 className='empty-cart'>is currently empty</h4>
        </header>
    </section>
        )
    }
  return (
    <section className='cart'>
        <header>
            <h2>Your bag</h2>
        </header>
        <div>
            {
                cartItems.map((item)=>(
                     <CartItem key={item.id} {...item} />
                ))
            }
        </div>
        <footer>
        <div className='cart-total'>
            <hr />
            <h4>
                total <span>$ {total.toFixed(2)}</span>
            </h4>
        </div>
        <button className='btn clear-btn'
        onClick={()=>dispatch(openModal())}>
            clear cart
        </button>
        </footer>
    </section>
  )
}

export default CartContainer