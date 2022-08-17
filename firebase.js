import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDgNGiC-6BEQx9NHPak8twSX9Bxx6PKVWk",
    authDomain: "clone-770be.firebaseapp.com",
    projectId: "clone-770be",
    storageBucket: "clone-770be.appspot.com",
    messagingSenderId: "1010145550676",
    appId: "1:1010145550676:web:e956ded45a10efc8b7e8c1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };