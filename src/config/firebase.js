import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDaDQ3saoUVK7n93mHAGDb0b6uoVuocPiA",
  authDomain: "clone-mail-b7f79.firebaseapp.com",
  projectId: "clone-mail-b7f79",
  storageBucket: "clone-mail-b7f79.appspot.com",
  messagingSenderId: "945848208759",
  appId: "1:945848208759:web:d96a5b0ed0477a31fe2572",
  measurementId: "G-HF8458H5L6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }

export default db
