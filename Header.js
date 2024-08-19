import { Component } from "react"
class Header extends Component
{ 
     name="hello world"
    render()
    {
       
        return(
            <div>
            <h1>{this.name}</h1>
            </div>
        )
    }
}
export default Header