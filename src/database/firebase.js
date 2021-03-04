import firebase from 'firebase';
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAXBsKXm2Vhfj28uUYrSVfyaKMHIOzuwvE",
    authDomain: "prueba123-de500.firebaseapp.com",
    projectId: "prueba123-de500",
    storageBucket: "prueba123-de500.appspot.com",
    messagingSenderId: "797526900079",
    appId: "1:797526900079:web:c5b91f7b0b2f3ac668bc9a",
    measurementId: "G-MQGPG2QT5K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db  = firebase.firestore();
  const auth = firebase.auth();

  export default {
      db,
      auth,
  };