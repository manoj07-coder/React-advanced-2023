import React, { useState } from "react";
import { data } from "../../src/data";

function UseStateArrays (){

    const [people, setPeople] = useState(data)

    const removeItem = (id) => {
        const newPeople = people.filter(people => people.id !== id);
        setPeople(newPeople);

    }

    return (
        
        <>
        {
            people.map((people)=>{
                const {id, name} = people
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                        <button onClick={()=>removeItem(id)}>remove</button>
                    </div>
                )
            })
        }
         <button className="btn" onClick={()=>setPeople([])}>clear items</button>
        </>
    )
}

export default UseStateArrays;