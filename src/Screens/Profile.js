import React,{useRef} from 'react';
import {Card,Button} from 'react-bootstrap';
import {useAuth} from '../context/AuthContext';
import {Link,useHistory} from 'react-router-dom';
import IdleTimer from 'react-idle-timer';

export default function Profile() {
    // const [error,setError]= useState()
    const {currentUser,logout} = useAuth()
    const history = useHistory()
    const idleTimer = useRef(null)

     function handleLogout(){
        logout()
        history.push("/login")
     }

    //  useEffect(() => {
    //      setTimeout(()=>{
    //          handleLogout()
    //         },120000)
    //  }, [ ])
    return (
        <>
        <IdleTimer ref={idleTimer} timeout={120000} onIdle={handleLogout}></IdleTimer>
        <Card>
          <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/updateprofile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
             <Button onClick={handleLogout}>Log Out</Button>  
           </div>
        </>
    )
}
