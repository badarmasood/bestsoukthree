
// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyB1iFxUbYarvryvyXfaQlHcZIXJ1EIKELQ",
  authDomain: "ecodairy-21957.firebaseapp.com",
  projectId: "ecodairy-21957",
  storageBucket: "ecodairy-21957.appspot.com",
  messagingSenderId: "862665806304",
  appId: "1:862665806304:web:594f5fa7ea795876ccdb85"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();