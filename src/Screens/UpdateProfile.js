import React,{useRef,useState} from 'react';
import {Card,Form,Button,Alert} from 'react-bootstrap';
import {useAuth} from '../context/AuthContext'
import {Link,useHistory} from 'react-router-dom';

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const fnameRef = useRef()
    const lnameRef = useRef()
    const addressRef = useRef()
    const {currentUser,updateEmail,updatePassword} = useAuth()
    const history = useHistory()
    const [Loading,setLoading]= useState(false)
    const [error,setError]= useState()


    function handleSubmit(e) {
        e.preventDefault()
        // signup(emailRef.current.value,passwordRef.current.value)
        // history.push("/")
        const promises=[]
    setLoading(true)
    setError("")
    if(emailRef.current.value!== currentUser.email){
        promises.push(updateEmail(emailRef.current.value))
    }
    if(passwordRef.current.value){
        promises.push(updatePassword(passwordRef.current.value))
    }
    Promise.all(promises).then(()=>{
        history.push("/")
    }).catch(()=>{
        setError("Failed to update")
    }).finally(()=>{
        setLoading(false)
    })
    }


    return (
        <>
           <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Update Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef}
                        defaultValue={currentUser.email}/>
                    </Form.Group>
                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} 
                        placeholder="Wish to change password"/>
                    </Form.Group>
                    {/* <Form.Group id='fname'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type='text'ref={fnameRef}/>
                    </Form.Group>
                    <Form.Group id='lname'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type='text'ref={lnameRef}/>
                    </Form.Group>
                    <Form.Group id='address'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type='text'ref={addressRef}/>
                    </Form.Group> */}
                    <Button className="w-100 " type='submit'>Update</Button>
                    <Link to="/" className="btn btn-primary w-100 mt-3">Cancel</Link>  
                </Form>
            </Card.Body>
           </Card>
        </>
    )
}
