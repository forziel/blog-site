import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiqnVuCDtAexefbMTdB3PNWddSfnrx05U",
  authDomain: "ilaydaninblogu-faa70.firebaseapp.com",
  projectId: "ilaydaninblogu-faa70",
  storageBucket: "ilaydaninblogu-faa70.appspot.com",
  messagingSenderId: "588965689959",
  appId: "1:588965689959:web:5c20b70c85702e5b33b2c2"
};

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)