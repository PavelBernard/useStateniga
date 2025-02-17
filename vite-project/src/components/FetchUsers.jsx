import { useEffect, useState } from 'react';

export const FetchUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <ul>
            {users.map(user => 
                <li key={user.id}>{user.name} email: {user.email}</li>)}
        </ul>
        <button onClick={() => fetchData()} >Nacti data</button>
        </>
    );
};