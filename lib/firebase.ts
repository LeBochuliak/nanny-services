import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBSACPkOxwoaBHcNswr0Nx-Q1-u7v_Y8Q4",
  authDomain: "nanny-services-32bbc.firebaseapp.com",
  projectId: "nanny-services-32bbc",
  storageBucket: "nanny-services-32bbc.firebasestorage.app",
  messagingSenderId: "380453834285",
  appId: "1:380453834285:web:9ca05528eff07699d472a4",
  measurementId: "G-ZBELMH8GTB",
  databaseURL:
  "https://nanny-services-32bbc-default-rtdb.europe-west1.firebasedatabase.app",
};

export const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
        : getApp();



export const db = getDatabase(app);    

