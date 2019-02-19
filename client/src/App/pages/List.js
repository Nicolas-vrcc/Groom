import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../components/UserProvider';
import RegisterForm from '../components/RegisterForm';

const List = () => {
    const [lists, setLists] = useState([])
    const { user, setUser } = useContext(UserContext)
    
    // Fetch the list on first mount, set title
    useEffect(() => {
        document.title = 'All users'
        getList()
    }, [])
    
    // Retrieves the list of items from the Express app
    const getList = async () => {
        const res = await fetch('/user')
        // const user = await res.json()
        // setUser(user)
    }
    
    if (user == null) return <RegisterForm />
    return (
        <div className="App">
            <h1>List of Items</h1>
            {/* Check to see if any items are found */}
            {lists && lists.length ? (
                <div>
                    {/* Render the list of items */}
                    {lists.map((item) => (
                        <div>
                            {item}
                        </div>
                    ))}
                </div>
            ) : (
                    <div>
                        <h2>No List Items Found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default List