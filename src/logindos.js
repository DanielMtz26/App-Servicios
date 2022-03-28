import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Login from './login';
import logo_servicios from './imagenes/logo_servicios.png';
import firebaseConfig from './firebase';


const Logindos  = () => {

    const [registro, setRegistro] = useState(false)

    const handlerSubmit = async(e)=> {
        e.preventDefault()
        const correo = e.target.email.value;
        const password = e.target.password.value;

        if(registro){
            await firebase.auth().createUserWithEmailAndPassword(correo,password);
        }
        else{
            await firebase.auth().signInWithEmailAndPassword(correo, password);
        }
    }

    return(
        <div><br/>
        <img src={logo_servicios} alt="logo" className='tamaño-imagen'/>
            <h2>{registro ? 'Registrate' : 'Inicia Sesión'}</h2>
            <form onSubmit={handlerSubmit}>
                <div>
                    <label className='form-label'>Correo electrónico:</label><br/>
                    <input type="email" className='form-control' placeholder='Ingresa email' id='email' required /><br/>     
                </div>
                <div>
                    <label className='form-label'>Contraseña:</label><br/>
                    <input type="password" className='form-control' placeholder='Ingresa contraseña' id='password' required /><br/>
                </div>

                <button type='submit' className='btn btn-primary'>
                    { registro ? 'Registrate' : 'Iniciar Sesión' }
                </button>

            </form>
            <br/>
            <div>
                <button onClick={()=> setRegistro(!registro)} className='btn btn-secondary' >
                    { registro ? '¿Ya tienes cuenta? Inicia Sesión' : '¿No tienes cuenta? Registrate' }
                </button>
            </div>

            <div>
                <Login />
            </div>
        </div>
        
    );
}

export default Logindos