// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXd09FXTL7oaml9pCyCQwLOWtLElleVXU",
  authDomain: "koreanmania-d8706.firebaseapp.com",
  projectId: "koreanmania-d8706",
  storageBucket: "koreanmania-d8706.firebasestorage.app",
  messagingSenderId: "567011959730",
  appId: "1:567011959730:web:d0f100264dc27652657aab",
  measurementId: "G-6682WL6HZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { analytics };