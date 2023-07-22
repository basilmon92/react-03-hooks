import {useState,useEffect} from "react";

export const GithubUsers = () => {
    const [users,setUsers] = useState([]);
    const url = 'https://api.github.com/users'
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const users = await response.json();
                console.log(users);
                setUsers(users)
            } catch(error) {
                console.log(error);
            }
        };
        fetchData();
    },[])
    return (
        <>
            {users.map( ({login,id,avatar_url}) => {
                return <div key={id} style={{width:'40vw',display:'flex',justifyContent:'center',flexDirection:'row',alignItems:'center',margin:'1em auto'}}>
                    <img src={avatar_url} alt={`profile avatar photo of ${login}`} style={{width:'50px',height:'auto',objectFit:'contain',padding:'0 1em'}} />
                    <p>{login}</p>
                </div>
            })
            }

            <h3>Hello</h3>
        </>
    );
};