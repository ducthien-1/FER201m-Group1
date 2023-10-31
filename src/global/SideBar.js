import { useEffect, useState } from 'react';
import Search from '../components/Search';
import SideBarItem from './SideBarItem';
import ProfileCustomerAgent from './ProfileCustomerAgent';
import ListGroup from 'react-bootstrap/ListGroup';
export default function Sidebar(props) {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch('http://localhost:3004/accounts')
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

    const searchHandler = (value) => {
        setSearch(value)
    }

    const listUserBySearch = users.filter(user => {
        return user.fname.toLowerCase().includes(search.toLowerCase()) || user.lname.toLowerCase().includes(search.toLowerCase());
    });

    console.log(listUserBySearch)

    return (
        <div className='p-3'>
            <div className='me-3'>
                <Search listen={searchHandler} />
            </div>
            <div style={{ height: '72vh', overflowY: 'auto' }}>
                <ListGroup variant="flush">
                    {listUserBySearch.map(user => (
                        <SideBarItem key={user.id} user={user} index={props.index} changeIndex={props.changeIndex} />
                    ))}

                </ListGroup>
            </div>
            <hr style={{marginBottom: '5px'}}/>
            <div>
                <ProfileCustomerAgent account={
                    {
                        "id": 3,
                        "fname": "Shigure",
                        "lname": "Ui",
                        "role": "customer-agent",
                        "cart": [1],
                        "orders": [3],
                        "avatar": "https://i.imgur.com/fnkEnGgh.jpg",
                        "active": "normal"
                    }
                } />
            </div>
        </div>
    )
}