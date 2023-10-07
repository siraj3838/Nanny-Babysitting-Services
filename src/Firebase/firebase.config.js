// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcav4QmXMBdOe9Ev90vBh1zi9J4ofB8KQ",
  authDomain: "nanny-babysitting-services.firebaseapp.com",
  projectId: "nanny-babysitting-services",
  storageBucket: "nanny-babysitting-services.appspot.com",
  messagingSenderId: "709096571448",
  appId: "1:709096571448:web:36fae3453436aada571ccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;