import './common.css';
import logog from './headerlogo1.jpg'
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <header>
        <img src = {logog} className='logog'/>
        <h2 className="title">The Joeun</h2>
        <div className="login">
            <Button variant="outline-primary" size='sm'>회원가입</Button>{' '}
            <Button variant="outline-primary" size='sm' onClick={handleShow}>로그인</Button>{' '}
        </div>
        <Login show={show} onHide={handleClose} />
        </header>
        </>        
    )

function Login() {
     return (
            <>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>PW</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}
export default Header;