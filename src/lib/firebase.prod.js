import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';
// seed the database

// config
const config = {
    apiKey: "AIzaSyDvGlgD_PoAUOXlp_MUErnFszWjhdz0U3I",
    authDomain: "new1-7e833.firebaseapp.com",
    databaseURL: "https://new1-7e833.firebaseio.com",
    projectId: "new1-7e833",
    storageBucket: "new1-7e833.appspot.com",
    messagingSenderId: "282722640959",
    appId: "1:282722640959:web:30bf7a7a6fc5a31b27448a"
};

const firebase = Firebase.initializeApp(config);

export { firebase };