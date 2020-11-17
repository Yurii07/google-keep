import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "keep-a7233.firebaseapp.com",
  databaseURL: "https://keep-a7233.firebaseio.com",
  projectId: "keep-a7233",
  storageBucket: "keep-a7233.appspot.com",
  messagingSenderId: "1017364620976",
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
