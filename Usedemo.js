import { useState } from "react";
import ReactDOM from "react-dom/client";

function Usedemo() {
  const [name, setName] = useState("anbu");

  return (
    <>
      <h1>My favorite color is {name}!</h1>
      <button
        type="button"
        onClick={() => setName("ahana")}
      >Blue</button>
    </>
  )
}
export  default Usedemo;