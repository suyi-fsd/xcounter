import { useState } from "react";
function Xcounter(){
    const [count,setCount] = useState(0);
    return(
        <>
        <h1>Counter App</h1>
        <p><span>Count: </span><span>{count}</span></p>
        <button name="Increment" onClick={()=>{setCount(count+1)}} >Increment</button>
        <button name="Decrement" onClick={()=>{setCount(count-1)}} >Decrement</button>
      
        </>
    )
} 

export default Xcounter;