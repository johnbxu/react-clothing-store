import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('asdfadsfadf').collection('cartItems').doc('asdasd');
firestore.doc('/users/adfasdfsad/cartItems/asdasd');
firestore.collection('users/asdadsfadf/cartItems')
