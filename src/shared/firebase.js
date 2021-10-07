import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDihIQNqjNj5cMfWX0NwDoGZwWUhuweKLA",
    authDomain: "scheduler-51538.firebaseapp.com",
    projectId: "scheduler-51538",
    storageBucket: "scheduler-51538.appspot.com",
    messagingSenderId: "195012347935",
    appId: "1:195012347935:web:99687cb3647d4237a72d2a",
    measurementId: "G-RQ36FM7VW9"
  };

  initializeApp(firebaseConfig);

  export const db = getFirestore();