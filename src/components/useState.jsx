import { useState } from 'react'

const UseStateComponent = () => {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1);
        console.log(count);
    }
    const resetCountClick = () => {
        setCount(0);
    }

    return (
        <>
            <p>You clicked the button {count} times</p>
            <button onClick={handleClick}>Increase</button>
            <button onClick={resetCountClick}>Reset</button>
        </>
    );
};

export default UseStateComponent;