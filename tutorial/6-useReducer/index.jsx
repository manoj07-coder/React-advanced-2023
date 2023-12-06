import React, { useReducer, useState } from 'react'
import {data} from '../../src/data';
import Modal from './modal';
import { reducer } from './reducer';


const defaultState = {
    people : data,
    isModalOpen : false,
    modalContent : '',

}

const Index = () => {

    const [name, setName] = useState('');
    const [state,dispatch] = useReducer(reducer,defaultState)

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name){
            const newItem = {id:new Date().getTime().toString(), name}
            dispatch({type: 'ADD_ITEM', payload: newItem});
            setName('')
        }else{
            dispatch({type:'NO_VALUE'})
        }
    
    }

    const closeModal = ()=>{
        dispatch({type:'CLOSE_MODAL'})
    }

  return (
    <>
    {state.isModalOpen && <Modal modalClose={closeModal}  modalContent={state.modalContent}/>}
    <form className='form' onSubmit={handleSubmit}>
        <div>
        <input 
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}  />
        </div>
        <button>Add</button>
    </form>
    {state.people.map((person)=>{
        const {id,name} = person
        return (
            <div key={id} className='item'>
                <h3>{name}</h3>
                <button onClick={()=>
                dispatch({type:'REMOVE_ITEM',payload:person.id})
                }>remove</button>
            </div>
        )
    })}
    </>
  )
}

export default Index