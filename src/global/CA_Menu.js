import { Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap';
import '../css/CA_Menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faBagShopping, faComments, faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Menu({ btn, onBtnChange, index }) {
    return (
        <div className="chat-header clearfix">
            <Row>
                <Col lg={6}>
                    <div className="chat-about">
                        <Link to={`${index.id}/account`} style={{ color: 'inherit', fontWeight: 'bold' }}>
                            <Image
                                src={index.avatar}
                                className="d-flex align-self-start me-3"
                                width="55px"
                                height="55px"
                                style={{ objectFit: 'fill', borderRadius: '50%', float: 'left' }}
                            />
                            <h6 className="m-b-0" style={{fontWeight: 'bold'}}>{index.fname + ' ' + index.lname}</h6>
                        </Link>
                        <small>Last seen: 2 hours ago</small>
                    </div>
                </Col>

                <Col lg={6} className="hidden-sm">
                    <ButtonGroup style={{ float: 'right', boxShadow: 'none', }}>
                        <Link to={`${index.id}/deliveries`}>
                            <Button variant={btn === 1 ? 'primary' : 'outline-primary'} onClick={() => onBtnChange(1)}><FontAwesomeIcon icon={faTruck} /></Button>
                        </Link>
                        <Link to={`${index.id}/orders`}>
                            <Button variant={btn === 2 ? 'success' : 'outline-success'} onClick={() => onBtnChange(2)}><FontAwesomeIcon icon={faBagShopping} /></Button>
                        </Link>
                        <Link to={`${index.id}/comments`}>
                            <Button variant={btn === 3 ? 'info' : 'outline-info'} onClick={() => onBtnChange(3)}><FontAwesomeIcon icon={faComments} /></Button>
                        </Link>
                        <Link to={`${index.id}/messages`}>
                            <Button variant={btn === 4 ? 'warning' : 'outline-warning'} onClick={() => onBtnChange(4)}><FontAwesomeIcon icon={faComment} /></Button>
                        </Link>
                    </ButtonGroup>
                </Col>
            </Row>
        </div>
    );
}