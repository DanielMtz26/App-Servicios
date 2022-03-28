import React, { Component } from 'react';
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from 'firebase/app';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import 'firebase/auth';
import firebaseConfig from './firebase';
import Home from './components/Home';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {

    render(){
        const { user, signOut, signInWithGoogle } = this.props;

        return (
            
        <div>            
            <br/>
            {
                user 
                ? <App />
                : <label className='form-label'> Inicia con: </label>
            }
            <br/>
            {
                user 
                ? <button className='btn btn-danger' onClick={signOut}>Salir</button>
                : <button className='btn btn-danger' onClick={signInWithGoogle}>Google</button>
            }           
      
        </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider(), 
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);
