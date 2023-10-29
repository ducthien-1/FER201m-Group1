import { Outlet } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Sidebar from "../global/SideBar";
import Menu from "../global/Menu";
import { useState } from "react";

export default function CustomerAgent() {
    const [btn, setBtn] = useState(4);
    const [indexUser, setUser] = useState({});

    const btnHandler = (value) => {
        setBtn(value);
    }

    const setIndexHandler = (value) => {
        setUser(value)
        setBtn(4)
    }

    return (
        <main style={{ backgroundColor: '#CDC4F9', height: '100vh' }}>
            <Container fluid className='py-3'>
                <Row>
                    <Col md={12}>
                        <Card id='chat3' style={{ borderRadius: '15px', height: '95vh' }}>
                            <Card.Body>
                                <Row>
                                    <Col className='' md={6} lg={5} xl={4}>
                                        <Sidebar index={indexUser} changeIndex={setIndexHandler}/>
                                    </Col>
                                    <Col md={6} lg={7} xl={8}>
                                        <Container fluid className=''>
                                            <Menu btn={btn} onBtnChange={btnHandler} index={indexUser}/>
                                            <Outlet />
                                        </Container>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}