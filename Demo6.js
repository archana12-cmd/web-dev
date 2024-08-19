import React, { useEffect, useRef, useState } from 'react'

export const Demo6 = () => {

    const [inputvalue,setInputvalue]=useState("")
    const prevRef=useRef()
 useEffect(()=>
     {
 prevRef.current=inputvalue
     },[inputvalue])
    const textRef=useRef()
     useEffect(()=>
      {
  textRef.current.focus()
    },[])
    const [counter,Setcounter]=useState(0)
    const countRef=useRef(0)
    const handleClick=()=>
        {
     Setcounter(counter+1)
         }
         const handleRef=()=>
             {
         countRef.current++
             }
             console.log("i am a rendering")
  return (
  
     <div>
         <input type="text" value={inputvalue}
         onChange={(e)=>setInputvalue(e.target.value)}></input>
         <h2>current value:{inputvalue}</h2>
       <h2>current value:{prevRef.current}</h2>
        
      <input ref={textRef} type="text"></input> 
     <h1>{counter}</h1> 
    <h1>{countRef.current}</h1>
     

     <button onClick={handleClick} >Increament counter</button>
    <button onClick={handleRef} >Increament counter</button> 
    </div> 
  )
}
