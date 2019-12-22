import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA2gWuVyikBWZVGW-mTOdxARmFxF_WO1Xg",
  authDomain: "sweet-home-2060d.firebaseapp.com",
  databaseURL: "https://sweet-home-2060d.firebaseio.com",
  projectId: "sweet-home-2060d",
  storageBucket: "sweet-home-2060d.appspot.com",
  messagingSenderId: "574368634830",
  appId: "1:574368634830:web:2a2041f0a37a4c4c7c7d9f",
  measurementId: "G-4GG3FMX90P"
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