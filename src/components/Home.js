import firebaseConfig from '../firebase';
import withFirebaseAuth from "react-with-firebase-auth";
import 'firebase/auth';
import firebase from 'firebase/app';


const Home = ({correoUsuario}) => {
    return (
        <div>
            <label>Bienvenido, <strong>{correoUsuario}</strong></label>

            

            <hr/>

            <div>

            </div>
        </div>
    )
}

export default Home

