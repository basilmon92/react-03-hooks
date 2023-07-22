import {useState,useEffect} from "react";

export const UseEffectComponent = () => {
    const [value,setValue] = useState(0);
    useEffect(()=>{
        console.log("HELLO FROM USE EFFECT");
    },[])
    return (
        <>
            <h1>value : {value}</h1>
            <button onClick={()=>setValue(value+1)}>Increase</button>
        </>
    );
};