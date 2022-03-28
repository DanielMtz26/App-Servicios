import React, { useState } from 'react';

import './App.css';
import App from './App';
import Login from './login';
import Logindos from './logindos';
import firebase from 'firebase/app';
import "firebase/auth";
import Home from './components/Home';


function Appdos() {
  const [user, setUser] = useState(null);
  const auth = firebase.auth(); 

  auth.onAuthStateChanged(auth, (userFirebase) =>{
    if(userFirebase){
      setUser(userFirebase);
    }
    else{
      setUser(null);
    }
  })

  return (
    <div className="App">
      <div className="App-header">
        
        {user ? <App correoUsuario = {user.correo} /> : <Logindos /> }
        
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default Appdos;