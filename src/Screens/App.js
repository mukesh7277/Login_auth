import React from 'react';
import SignUp from './SignUp';
import {Container} from 'react-bootstrap';
import { AuthProvider } from '../context/AuthContext';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Profile from './Profile';
import LogIn from './LogIn';
import ForgetPassword from './ForgetPassword';
import UpdateProfile from './UpdateProfile';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Container className="d-flex aling-items-center justify-content-center"
    style={{minHeight:"100vh",marginTop:'20px'}}>
      <div className="w-100 " style={{maxWidth:'400px'}}>
    <Router initial>
       <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Profile}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/forgetpassword" component={ForgetPassword}/>
            <PrivateRoute path="/updateprofile" component={UpdateProfile}/>
          </Switch>
       </AuthProvider>
    </Router>
    </div>
    </Container>
  );
}

export default App;
