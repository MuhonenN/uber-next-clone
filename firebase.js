import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQKKULUZMFP-AlfBlhYEMjGLETFWV4JhA",
    authDomain: "uber-next-clone-890fb.firebaseapp.com",
    projectId: "uber-next-clone-890fb",
    storageBucket: "uber-next-clone-890fb.appspot.com",
    messagingSenderId: "304558151949",
    appId: "1:304558151949:web:e6e4e9c10fed80ac52f844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }