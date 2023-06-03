// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtLYpJVu4q7nQB2-xZ83vMIMx1BUhr4XY",
  authDomain: "rn-todo-c8ecf.firebaseapp.com",
  projectId: "rn-todo-c8ecf",
  storageBucket: "rn-todo-c8ecf.appspot.com",
  messagingSenderId: "65182024814",
  appId: "1:65182024814:web:481950d1ace93a3965d27f",
}

// Initialize Firebase
let app
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = app.auth()

export { auth }
