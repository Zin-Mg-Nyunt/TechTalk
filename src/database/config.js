import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDa4fo0aHzGgkA5QzwSDoB4BaHaNbpWyr0",
    authDomain: "techtalk-blog-b0492.firebaseapp.com",
    projectId: "techtalk-blog-b0492",
    storageBucket: "techtalk-blog-b0492.firebasestorage.app",
    messagingSenderId: "242617726261",
    appId: "1:242617726261:web:1f72528293d196f2c4087c"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init services
// firestore
const db = getFirestore(app);
// firebase storage
const storage = getStorage(app);

const auth = getAuth(app);

export { db, storage, auth };