import firebase from 'firebase/app';
import 'firebase/firestore';
import'firebase/auth';

const config = {
        apiKey: "AIzaSyAM1h9qe6xYghWkUetRDrYAYToGvQezS94",
        authDomain: "crwn-shop-db-9825e.firebaseapp.com",
        databaseURL: "https://crwn-shop-db-9825e.firebaseio.com",
        projectId: "crwn-shop-db-9825e",
        storageBucket: "",
        messagingSenderId: "421189748576",
        appId: "1:421189748576:web:b3080dd89fe122c7"
      };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account'});
 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;
