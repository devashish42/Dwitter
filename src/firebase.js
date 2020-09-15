import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB0XqaQUAVtm2G8baHW2dQukQWRTGBUUMA",
  authDomain: "dtwitter-6b898.firebaseapp.com",
  databaseURL: "https://dtwitter-6b898.firebaseio.com",
  projectId: "dtwitter-6b898",
  storageBucket: "dtwitter-6b898.appspot.com",
  messagingSenderId: "355637365809",
  appId: "1:355637365809:web:c46e9f48c607fff4731910",
  measurementId: "G-5TDKHNSN7F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
