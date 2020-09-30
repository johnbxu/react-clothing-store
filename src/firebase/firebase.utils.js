import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDE3o4agwOf65_fQL3lPBVuMU5RbM5Gx1k",
  authDomain: "react-store-tutorial.firebaseapp.com",
  databaseURL: "https://react-store-tutorial.firebaseio.com",
  projectId: "react-store-tutorial",
  storageBucket: "react-store-tutorial.appspot.com",
  messagingSenderId: "116337940056",
  appId: "1:116337940056:web:eb125327681e5585711c2d",
  measurementId: "G-TWK3YJQH9X"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
