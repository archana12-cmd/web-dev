import React, { act, useReducer } from 'react'
//usereducer is usually prefarable to usestate when yoy have complex state logic that involves multiple sub values or when the
//next state depends on previous one
const transactionReducder=(state,action)=>
{
    switch(action.type)
    {
        case 'withdraw':
            return state-action.payload
        case 'deposit':
            return state+action.payload
        case 'default':
            return state
    }
    
}
export const Demo8 = () => {
    const withdraw=(amount)=>
    {
        dispatch({type:'withdraw',payload:amount})
    }
    const deposit=(amount)=>
    {
        dispatch({type:'deposit',payload:amount})
    }
    const[state,dispatch]=useReducer(transactionReducder,1000)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={withdraw}>withdraw</button>
        <button onClick={deposit}>deposit</button>
    </div>
  )
}