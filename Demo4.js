import React, { useEffect, useState } from 'react'

export const Demo4 = () => {
  
  const[counter1,Setcounter1]=useState(0);
  const[counter2,Setcounter2]=useState(0);
//   useEffect(()=>{
//     console.log("usereffect executerf")
//   }
// )
useEffect(()=>{
    console.log("usereffect executerf")
  },[]
)
  
  
    return (
    
    <div>
        <h1>{counter1}</h1>
        <h1>{counter2}</h1>
        <button onClick={()=>Setcounter1(counter1+1)}>counter1</button>

        <button onClick={()=>Setcounter2(counter2+1)}>counter2</button>    </div>
  )
}
