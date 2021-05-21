import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwV8clON9Kpg8STWNZQ8cFvdTWaEDYDEE",
  authDomain: "snapchat-app-5e5e6.firebaseapp.com",
  projectId: "snapchat-app-5e5e6",
  storageBucket: "snapchat-app-5e5e6.appspot.com",
  messagingSenderId: "769510173685",
  appId: "1:769510173685:web:42010b23c1410366628ebc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
