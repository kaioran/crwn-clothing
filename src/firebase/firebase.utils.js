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

      export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date();
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };
      
      export const auth = firebase.auth();
      export const firestore = firebase.firestore();
      
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      export const signInWithGoogle = () => auth.signInWithPopup(provider);
      
      export default firebase;