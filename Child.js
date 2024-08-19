import { Component } from "react";

class Child extends Component
{
    render()
    {
        const {name,age}=this.props 
        return(
            <>
            <h1>{name}{age}</h1>
            </>
        )
    }
}
export default Child;