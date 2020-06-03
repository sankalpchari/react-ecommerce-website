import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyARhT0J94JBzdPvYRGlDHg98wXHgvd7gP0",
    authDomain: "crowndb-93478.firebaseapp.com",
    databaseURL: "https://crowndb-93478.firebaseio.com",
    projectId: "crowndb-93478",
    storageBucket: "crowndb-93478.appspot.com",
    messagingSenderId: "988028223539",
    appId: "1:988028223539:web:f009f038104fc63bc56346",
    measurementId: "G-8PRX5CWF47"
  };

  firebase.initializeApp(config);

 export const auth =firebase.auth();
 export const firestore=firebase.firestore();
        const provider=new firebase.auth.GoogleAuthProvider(); 
        provider.setCustomParameters({'prompt':'select_account'});

        export const signIn=()=>auth.signInWithPopup(provider);

export default firebase;