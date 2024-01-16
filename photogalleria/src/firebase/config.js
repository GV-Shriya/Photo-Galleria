import firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDonHYF4ZQ8eVeB8b9XcmHv8tGt_OMLPHg",
  authDomain: "firegram-galleria.firebaseapp.com",
  projectId: "firegram-galleria",
  storageBucket: "firegram-galleria.appspot.com",
  messagingSenderId: "1025039459706",
  appId: "1:1025039459706:web:0b8d5ce05bd52ff83a22c3"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
