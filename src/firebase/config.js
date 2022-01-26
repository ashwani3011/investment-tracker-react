import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZKowfTMynue-fdFhp2ABO_TcPzoL6DNs",
  authDomain: "intr-d5d77.firebaseapp.com",
  projectId: "intr-d5d77",
  storageBucket: "intr-d5d77.appspot.com",
  messagingSenderId: "337707883813",
  appId: "1:337707883813:web:09d2a95b6b8e5c71134ecc",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
