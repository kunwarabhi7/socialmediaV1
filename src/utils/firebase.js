import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCbBrHYKwPzFnGIJFwgjlyqjiHtNCs14Lg",
  authDomain: "social-media-1958c.firebaseapp.com",
  projectId: "social-media-1958c",
  storageBucket: "social-media-1958c.appspot.com",
  messagingSenderId: "801668492003",
  appId: "1:801668492003:web:f1d2b27f6f0272706ab3d6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)