import { initializeApp } from "firebase/app";
// import * as firebase from "firebase/app";
import {getAuth} from "firebase/auth";

const firebase = {
  apiKey: "AIzaSyDB84kNwsrJV9TIpBdrgGjXHf1ViHcPp7M",
  authDomain: "movie-ticket-booking-7d752.firebaseapp.com",
  projectId: "movie-ticket-booking-7d752",
  storageBucket: "movie-ticket-booking-7d752.appspot.com",
  messagingSenderId: "178166831645",
  appId: "1:178166831645:web:fd0ce90ede2e2bb00104f4",
  measurementId: "G-6EH649Y7J5"
};

// Initialize Firebase
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
// export default firebase;

const app = initializeApp(firebase);
export const auth  = getAuth(app)
export default firebase