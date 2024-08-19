import { Component } from "react";
import Child from './Child';

class Props extends Component
{
    
    
    render()
    {
        
    //onst name="archana devi"
    //const age=23
    const name1=["python","c","c++"]
        return(
            <>
             {name1.map((i)=>
            <Child name={i}></Child>
            )}
             


             {/* <Child  name={name}
            age={age}/>  */}
            </>
        )
    }
}
export  default Props; 