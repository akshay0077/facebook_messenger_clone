import firebase from "firebase"


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdi0-CbSUwoMEdKnNWHoT19f6uAM3Xs_g",
    authDomain: "fb-messenger-clone-348e6.firebaseapp.com",
    projectId: "fb-messenger-clone-348e6",
    storageBucket: "fb-messenger-clone-348e6.appspot.com",
    messagingSenderId: "753408692649",
    appId: "1:753408692649:web:076918abbfd07ed1e534b8",
    measurementId: "G-R3YHX7MFVK"


})

const db = firebaseApp.firestore()

export default db