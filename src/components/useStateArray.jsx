import { data } from '../data.js';
import { useState } from "react";

export const UseStateArray = () => {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        setPeople(people.filter((person)=> person.id !== id));
    }
    const clearAllItems = () => {
        setPeople([]);
    }
    return (
        <>
            {people.map((person)=>{
                const {id,name} = person;
                return <div key={id} style={{display:'flex',justifyContent:'center',marginBottom:'1em'}}>
                    <h4 style={{color: 'red',margin:'1em'}}>{name}</h4>
                    <button type="button" style={{margin:'0 auto'}} onClick={()=>removeItem(id)}>Remove Item</button>
                </div>
            })}

            <button type="button" style={{marginTop:'2rem'}} onClick={()=>clearAllItems()}>Clear Items</button>
        </>
    );
};