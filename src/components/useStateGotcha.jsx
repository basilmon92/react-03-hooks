import {useState} from "react";

export const UseStateGotcha = () => {
    const [value,setValue] = useState(0);
    const handleClick = () => {
        setTimeout(()=>{
            setValue((currentState)=>{
                const newState = currentState + 1;
                return newState;
            })
        },3000)
    }
    return (
        <>
            <h2>{value}</h2>
            <button onClick={()=>handleClick()}>Increase</button>
        </>
    );
};