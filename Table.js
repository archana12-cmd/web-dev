import { Component } from "react";

class Table extends Component{
   
   
   constructor()
   {
    super();
    this.state={
        initalvalue:"welcome",name:"archana"
    }
   }
   nameChange=()=>
    {
        this.setState({initalvalue:"thanks for watching",name:"vishnu"})
    }
    render()
    {
        return(
        
            <div>
                <h1>{this.state.initalvalue}{this.state.name}</h1>
                <button onClick={this.nameChange}>click</button>
            </div>
        

    )}
}
export default Table;