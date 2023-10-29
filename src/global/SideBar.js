import { useEffect, useState } from 'react';
import Search from '../components/Search';
import SideBarItem from './SideBarItem';
import ListGroup from 'react-bootstrap/ListGroup';
export default function Sidebar(props) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:3004/account')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                // console.log(JSON.stringify(data));
                // console.log(JSON.stringify(data[0]));
                props.changeIndex(data[0])
                // console.log(`index: ${props.index}`)
                // console.log(JSON.stringify(props.index))
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='p-3'>
            <div className='me-3'>
                <Search />
            </div>
            <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                <ListGroup variant="flush">
                    {users.map(user => (
                        <SideBarItem key={user.id} user={user} index={props.index} changeIndex={props.changeIndex} />
                    ))}

                </ListGroup>
            </div>

        </div>
    )
}