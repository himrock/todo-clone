// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyDWzgVSQdZCTfEOZx6wULzOEN9z2Ag4774",
    authDomain: "todo-clone-88cd2.firebaseapp.com",
    databaseURL: "https://todo-clone-88cd2.firebaseio.com",
    projectId: "todo-clone-88cd2",
    storageBucket: "todo-clone-88cd2.appspot.com",
    messagingSenderId: "396876057785",
    appId: "1:396876057785:web:b131449431159aeca55f68",
    measurementId: "G-12002CX1FQ"
});

const db = firebaseapp.firestore();

export default db;