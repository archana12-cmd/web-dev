import { Component } from "react";

class Product extends Component{
    render()
{
    const {name,price}=this.props;
return(
    <div>
        <h2>{name}</h2>
        <h2>price:${price}</h2>
    </div>
)
}
}
export default Product;
