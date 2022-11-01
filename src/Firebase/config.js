import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA_c4rWQTZqfO0YsyGddSaRAnzMzHhdfPk",
    authDomain: "olx-clone-d3c3e.firebaseapp.com",
    projectId: "olx-clone-d3c3e",
    storageBucket: "olx-clone-d3c3e.appspot.com",
    messagingSenderId: "869360245537",
    appId: "1:869360245537:web:c01eb905363778bfba3c60",
    measurementId: "G-T3ZT9R900H"
  };

const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);