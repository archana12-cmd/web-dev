import { useState } from "react";


function Demo3() {
  const [color, setColor] = useState();

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

export default Demo3;
