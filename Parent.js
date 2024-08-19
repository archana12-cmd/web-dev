import { Component } from "react"
import Product from "./Product";

class Parent extends Component
{
    render()
    {
        
        const products=[{
        name:'laptop',price:10000}
        ,{name:'smartphone',price:20000}
        ,{name:'headphones',price:30000}]

        return(
            <div>
                <h1>products list</h1>
                {products.map((product,index)=>
                <Product key={index}
            name={product.name}
       price={product.price}/> )}
            </div>
        )
        } 
}
export default Parent;
