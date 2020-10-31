import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnMAuMER4oBFGLbTFIp93MI3SXr2F9zpQ",
  authDomain: "twitter-clone-6234a.firebaseapp.com",
  databaseURL: "https://twitter-clone-6234a.firebaseio.com",
  projectId: "twitter-clone-6234a",
  storageBucket: "twitter-clone-6234a.appspot.com",
  messagingSenderId: "178281217083",
  appId: "1:178281217083:web:8cbb605d9c503b2c5ff01e",
  measurementId: "G-60QMVGFFJS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;