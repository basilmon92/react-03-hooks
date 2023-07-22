import {useState} from 'react';

export const UseStateObject = () => {
    const [person,setPerson] = useState({
        name: 'peter',
        age:24,
        hobby:'read novels'
    })
    const displayPerson = () => {
        setPerson({
            name: 'john',
            age: 28,
            hobby: 'study science and write novels'
        })
    }
    return (
        <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h4>Enjoys to {person.hobby}</h4>
            <button onClick={()=>displayPerson()}>Show John</button>
        </>
    );
};