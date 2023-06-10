import React, { useState, useEffect} from 'react';
// import { VscAdd } from "react-icons/vsc";

const User = () => {
  function nag (){
    var a = 10;
    document.write(a*1000)
  }
  const [btn,setBtn]=useState("Go to function");
  useEffect(()=>console.log((btn),[btn]),  )
  return (
    <div> 
    <h1>{btn}</h1>
    <button onClick={() => { setBtn( nag) }}>view </button>

     
  {/* <VscAdd/> */}
    </div>
  )
}

export default User