import React, { useCallback, useEffect, useMemo, useState } from "react";
import {useFetch} from '../9-customHooks/2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

const Index = () => {

    const {products} = useFetch(url)
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState(0);

    const AddtoCart = useCallback(()=>{
        setCart(cart + 1)
    },[cart])

    const calculateMostExpensive = (data)=>{
        return (
            data.reduce((total,item)=>{
                const price = item.fields.price;
                if(price >= total){
                    total = price;
                }
                return total;
            }, 0)/ 100
        )
    }

    const mostExpensive = useMemo(()=> calculateMostExpensive(products),[products])

  return (
    <>
    <h2>Count: {count}</h2>
    <button className="btn" onClick={()=>setCount(count + 1)}>Click me</button>
    <h2 style={{marginTop:'3rem'}}>Cart: {cart}</h2>
    <h2>Most expensive item: ${mostExpensive}</h2>
    <BigList products={products} AddtoCart={AddtoCart}/>
    </>
  )
}

const BigList = React.memo(({products, AddtoCart})=>{
    
    useEffect(()=>{
        console.log('Big list is called')
    })


    return (
        <section className="products">
            {
                products.map((product)=>{
                    return (
                        <SingleProduct  key={product.id} {...product} AddtoCart={AddtoCart}/>
                    )
                })
            }
        </section>
    )
})

const SingleProduct = ({fields, AddtoCart})=>{

    useEffect(()=>{
        console.count('single item called')
    })

    let {name, price} = fields
    price = price / 100;
    const image = fields.image[0].url;

    return (

        <article className="product">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>$ {price}</p>
            <button className="btn" onClick={AddtoCart}>Add to cart</button>
        </article>
    )
}

export default Index