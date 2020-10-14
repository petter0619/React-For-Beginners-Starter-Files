import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDwWakweHZkhcNEEJl5FzNh-snql6B95Wk",
    authDomain: "catch-of-the-day-32a1a.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-32a1a.firebaseio.com",
    //projectId: "catch-of-the-day-32a1a",
    //storageBucket: "catch-of-the-day-32a1a.appspot.com",
    //messagingSenderId: "567933238243",
    //appId: "1:567933238243:web:f9f2e6832f354bba6c7ed6"
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// Default export
export default base;