import firebase from "firebase";

const firebaseConfig = {
    apiKey: 'AIzaSyCYCCbz5J6KGlPHQcfZ6V55AUeaq-l3Jn8',
    authDomain: 'raahee-5a80f.firebaseapp.com',
    databaseURL: 'https://raahee-5a80f.firebaseio.com',
    projectId: 'raahee-5a80f',
    storageBucket: 'raahee-5a80f.appspot.com',
    messagingSenderId: '385300765927',
    appId: '1:385300765927:web:7163f7a7f5059251521642',
    measurementId: 'G-P4BTGSXBEK',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;