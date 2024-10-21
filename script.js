document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpEjPO2LK0F0It-N46y9WsrsrKU0rwSbk",
  authDomain: "resume-5ba4b.firebaseapp.com",
  projectId: "resume-5ba4b",
  storageBucket: "resume-5ba4b.appspot.com",
  messagingSenderId: "785681935586",
  appId: "1:785681935586:web:8bd70a507593456149c2bb",
  measurementId: "G-TQGJF8GCM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);