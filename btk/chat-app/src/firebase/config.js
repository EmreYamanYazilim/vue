// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDhvn49zCisByfaKs_ufPMs7ZWt5z7SlDg",
    authDomain: "chat-app-dbbb1.firebaseapp.com",
    projectId: "chat-app-dbbb1",
    storageBucket: "chat-app-dbbb1.appspot.com",
    messagingSenderId: "915164419306",
    appId: "1:915164419306:web:83b5ace014e20c75fa7393",
    measurementId: "G-5JQ83VRX6V"
  };
  firebase.initializeApp(firebaseConfig)
  const projectFirestore = firebase.firestore();
  const timestap = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, timestap}