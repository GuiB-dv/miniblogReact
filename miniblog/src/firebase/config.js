import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDTLrVaM_NxH3_J4uhnrH5XJscsZ27BZGs",
  authDomain: "miniblog-693d5.firebaseapp.com",
  projectId: "miniblog-693d5",
  storageBucket: "miniblog-693d5.appspot.com",
  messagingSenderId: "206065072252",
  appId: "1:206065072252:web:06e4e2cba8bcdd288df1f9",
  measurementId: "G-NHD036V58T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, db }