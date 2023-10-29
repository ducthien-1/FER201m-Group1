import { Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap';
import '../css/Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping, faComments, faComment } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Buttons() {

}

export default function Menu({ btn, onBtnChange, index }) {
    return (
        <div className="chat-header clearfix">
            <Row>
                <Col lg={6}>
                    <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                        <Image
                            src={index.avatar}
                            className="d-flex align-self-center me-3"
                            width="40"
                            height="40"
                            style={{ objectFit: 'fill', borderRadius: '50%' }}
                        />
                    </a>
                    <div className="chat-about">
                        <h6 className="m-b-0">{index.fname + ' ' + index.lname}</h6>
                        <small>Last seen: 2 hours ago</small>
                    </div>
                </Col>
                <Col lg={6} className="hidden-sm">
                    <ButtonGroup style={{ float: 'right' }}>
                        <Button variant={btn === 1 ? 'info' : 'outline-info'} onClick={() => onBtnChange(1)}><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                        <Link to={`${index.id}/order`}>
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