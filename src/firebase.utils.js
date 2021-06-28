import firebase from "firebase";

const firebaseConfig = {
    apiKey: 'AIzaSyDbZtFhcgwc1PFvwIX569C_Ei6-LEsJ2zs',
    authDomain: 'raahee-testing.firebaseapp.com',
    databaseURL: 'https://raahee-testing.firebaseio.com',
    projectId: 'raahee-testing',
    storageBucket: 'raahee-testing.appspot.com',
    messagingSenderId: '410583406163',
    appId: '1:410583406163:web:eb5759cd29c1da605658a6',
    measurementId: 'G-LR7RF5S9BZ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;