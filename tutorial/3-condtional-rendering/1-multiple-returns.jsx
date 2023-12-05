import React, { useEffect, useState } from "react";

const url = 'https://jsonplaceholder.typicode.com/posts/9'

function MultipleReturns (){

    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('default user')

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(res.status >= 200 && res.status <= 299){
               return  res.json()
            } else {
                setIsLoading(false);
                setIsError(true);
                throw new Error(res.statusText)
            }
        })
        .then((user)=>{
            const {title} = user;
            setUser(title)
            setIsLoading(false)
        })
        .catch((err)=>console.log(err))
    },[])

    if(isLoading){
        return <div>
            <h2>Loading...</h2>
        </div>
    }

    if(isError){
        return <div>
            <h2>Error...</h2>
        </div>
    }

    return(
        <div>
            <h2>{user}</h2>
        </div>
    )
}

export default MultipleReturns