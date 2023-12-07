import React from "react";
import PropTypes from 'prop-types'
import Defaultimg from '../../src/assets/default-image.jpeg'

function Product ({image, name, price}){

    const url  = image && image.url

    return (
        <>
        <article className="product">
            <img src={url || Defaultimg} alt="" />
            <h4>{name || 'default name'}</h4>
            <h4>$ {price || 3.99}</h4>
        </article>
        </>
    )
}

Product.PropTypes  = {
    image:PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,
    price:PropTypes.string.isRequired
}

// Product.defaultProps = {
//     image:Defaultimg,
//     name:'Default name',
//     price:'3.99'
// }

export default Product