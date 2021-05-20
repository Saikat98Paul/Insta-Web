import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCc3_aLHO7qzvQrx0IxaqK7ACeresNtyRc",
  authDomain: "insta-web-c4008.firebaseapp.com",
  projectId: "insta-web-c4008",
  storageBucket: "insta-web-c4008.appspot.com",
  messagingSenderId: "367548058822",
  appId: "1:367548058822:web:7cdb20468965069dce9bc7",
  measurementId: "G-PQQYRQC9RM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
