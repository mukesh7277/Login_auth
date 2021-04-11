import firebase from 'firebase/app';
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAOtKroYYihf8y4nAobvLNwZgPfiiPGjr0",
    authDomain: "login-26637.firebaseapp.com",
    projectId: "login-26637",
    storageBucket: "login-26637.appspot.com",
    messagingSenderId: "22868592628",
    appId: "1:22868592628:web:adbcdffc417ea2d3855ba1"
})


export const auth = app.auth()
export default app;