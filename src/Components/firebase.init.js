// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWGmHqvg0nEI2WbbvHzE7gt2UXdbj1cHo",
  authDomain: "fitness-trainee.firebaseapp.com",
  projectId: "fitness-trainee",
  storageBucket: "fitness-trainee.appspot.com",
  messagingSenderId: "143472445330",
  appId: "1:143472445330:web:a15127e47211f8c4a5a34b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth