import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/5.0.1/firebase-database.js";



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user = null) {

        console.log("logged in!");
        // ...
    } else {
        // User is signed out
        // ...
        console.log("no user");
    }
});