import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAA_UAzrbj8R3j7I_oqgve-YyjaVrCDKpM",
    authDomain: "raahee-web-calendar-e9d76.firebaseapp.com",
    projectId: "raahee-web-calendar-e9d76",
    storageBucket: "raahee-web-calendar-e9d76.appspot.com",
    messagingSenderId: "1536936436",
    appId: "1:1536936436:web:b7dc40e24245eb7bffd1a1",
    measurementId: "G-B2KHFP7SZZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;