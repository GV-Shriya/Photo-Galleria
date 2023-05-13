import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmabrwVHziEl2zyQJ5uM7YrCEwQBEZSbI",
  authDomain: "photo-galleria-8b8d2.firebaseapp.com",
  projectId: "photo-galleria-8b8d2",
  storageBucket: "photo-galleria-8b8d2.appspot.com",
  messagingSenderId: "632206897880",
  appId: "1:632206897880:web:fc25c9324c1a791d8e1dad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };