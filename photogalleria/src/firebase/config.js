import firebase from 'firebase/compat/app';
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWYt_2Hq3vDgO-nGfm6UAb1M8cH6wyLeo",
  authDomain: "firegram-galleria-b487b.firebaseapp.com",
  projectId: "firegram-galleria-b487b",
  storageBucket: "firegram-galleria-b487b.appspot.com",
  messagingSenderId: "1037720405104",
  appId: "1:1037720405104:web:a817408d13daed1b5920b5"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
