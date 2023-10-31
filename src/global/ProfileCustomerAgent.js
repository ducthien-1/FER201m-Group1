import { Image, Dropdown } from 'react-bootstrap';
import '../css/ProfileCustomerAgent.css'
import { Link } from 'react-router-dom';

export default function ProfileCustomerAgent({ account }) {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="" id="Profile">
                    <Image
                        src={account.avatar}
                        className="d-flex align-self-center me-3 profile"
                        width="40"
                        height="40"
                        style={{ objectFit: 'fill', borderRadius: '50%' }}
                    />
                    <h6 className="m-b-0 profile">
                        {account.fname + ' ' + account.lname}
                    </h6>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Link>
                            Tài khoản
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link >Đăng xuất</Link>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}