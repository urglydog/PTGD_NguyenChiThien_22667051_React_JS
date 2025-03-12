import { useState } from 'react'
import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

 export default function tmp(){
    function reducer(action,state){
        switch(action.type){
            case '+': return {state, count: count+1};
            case '-': return {...state, count: count-1};
            default: state;
        }
    }

    const [count,dispatch] = useReducer(reducer,{count:0});

    function handleClick(){
        dispatch({type:'+'})
    }

    function handleClick(){
        dispatch({type:'+'})
    }
    return(
        <>
        {/* <input type="numer" name="" id=""  placeholder='Value'/> */}
        <span>{count}</span>
        <button onClick={handleClickAddition}>Save</button>
        <button onClick={handleClickMinus}>Minus</button>
        </>
    )
}