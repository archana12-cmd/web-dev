import { Component } from "react";

class componentMount extends Component{
constructor()

{
    console.log("render")
    super();
    this.state=({favoritecolor:"red"})
}
componentDidMount()

{
    console.log("did mount")
    setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
}
componentDidUpdate() {
    console.log("update")
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }

render()
{
    return(
    <>    <h1>my favorite color is{this.state.favoritecolor}</h1>
    <div id="mydiv"></div>
    </>
        
    )
}
}
export  default componentMount;