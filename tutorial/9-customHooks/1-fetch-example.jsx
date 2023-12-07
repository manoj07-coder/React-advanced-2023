import React from "react";
import {useFetch} from './2-useFetch'

const url = 'https://course-api.com/javascript-store-products'

function Example (){

    const {loading,products} = useFetch(url)
    console.log(products)

    return (
        <>
        <h2>{loading ? 'Loading...': 'Data...' }</h2>
        </>
    )
}

export default Example