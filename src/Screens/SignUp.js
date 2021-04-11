import React,{useRef} from 'react';
import {Card,Form,Button} from 'react-bootstrap';
import {useAuth} from '../context/AuthContext'
import {Link,useHistory} from 'react-router-dom';

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const fnameRef = useRef()
    const lnameRef = useRef()
    const addressRef = useRef()
    const {signup} = useAuth()
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        signup(emailRef.current.value,passwordRef.current.value)
        history.push("/")
    }


    return (
        <>
           <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required/>
                    </Form.Group>
                    <Form.Group id='fname'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type='text'ref={fnameRef} required/>
                    </Form.Group>
                    <Form.Group id='lname'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type='text'ref={lnameRef} required/>
                    </Form.Group>
                    <Form.Group id='address'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type='text'ref={addressRef} required/>
                    </Form.Group>
                    <Button className="w-100 " type='submit'>Sign Up</Button>
                </Form>
            </Card.Body>
           </Card> 
           <div className="w-100 text-center mt-2">
               Already have an account? <Link to="/login">Log In</Link>
           </div>
        </>
    )
}
