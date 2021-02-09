import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDsmbdrmxbrVJ3KQenm_1u8hyVeYLSaB4E",
    authDomain: "fire-study-41d40.firebaseapp.com",
    projectId: "fire-study-41d40",
    storageBucket: "fire-study-41d40.appspot.com",
    messagingSenderId: "709196401657",
    appId: "1:709196401657:web:67d5c56dd23c470478cb28",
    measurementId: "G-7DSGSM96VL"
};

export default firebase.initializeApp(firebaseConfig);