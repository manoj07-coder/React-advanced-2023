import React, { useCallback, useContext, useState } from 'react';
import {data} from '../../src/data'

const PersonContext = React.createContext()

function ContextAPI (){

    const [people, setPeople] = useState(data)

    const removePerson = (id)=>{
        setPeople((people)=> {
            return people.filter((person)=>person.id !== id)})
    }

    return (
        <PersonContext.Provider value={{removePerson}}>
            <h2>Context API / UseContext</h2>
            <List people={people} />
        </PersonContext.Provider>
    )
}

const List = ({people}) => {
    return (
        <>
        {people.map((person)=>{
            return <SinglePerson key={person.id} {...person} />
        })}
        </>
    )
}

const SinglePerson = ({id,name}) => {
    const {removePerson} = useContext(PersonContext);
    return (
        
            <div className='item'>
            <h4>{name}</h4>
            <button onClick={()=>removePerson(id)}>remove</button>
            </div>
    
    )
}

export default ContextAPI