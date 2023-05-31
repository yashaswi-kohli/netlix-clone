import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQBHNsA3gy9RrrIurf_6x-AUSIeb8SXoo",
  authDomain: "netflix-clone-a8f6f.firebaseapp.com",
  projectId: "netflix-clone-a8f6f",
  storageBucket: "netflix-clone-a8f6f.appspot.com",
  messagingSenderId: "513801504871",
  appId: "1:513801504871:web:62ed6e1b34299acab3acc2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
