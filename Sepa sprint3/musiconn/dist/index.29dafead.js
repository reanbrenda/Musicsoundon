var firebaseConfig = {
    apiKey: "AIzaSyCBtC1jhF68kfMuajQsSwJAmp-aofqTWmk",
    authDomain: "soundon-c96fa.firebaseapp.com",
    projectId: "soundon-c96fa",
    storageBucket: "soundon-c96fa.appspot.com",
    messagingSenderId: "1063722134091",
    appId: "1:1063722134091:web:d28dce14b08a43963d3bce",
    measurementId: "G-6E1BBP3F7W"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
var provider = new firebase.auth.GoogleAuthProvider();
function googleSignin() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token);
        console.log(user);
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code);
        console.log(error.message);
    });
}
function Signup() {
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    mobilenumber = document.getElementById('mobilenumber').value;
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!');
        return;
    // Don't continue running the code
    }
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password).then(function() {
        // Declare user variable
        var user = auth.currentUser;
        // Add this user to Firebase Database
        var database_ref = database.ref();
        // Create User data
        var user_data = {
            email: email,
            username: username,
            mobilenumber: mobilenumber
        };
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).set(user_data);
        // DOne
        alert('User Created!!');
    }).catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code;
        var error_message = error.message;
        alert(error_message);
    });
}
// Set up our login function
function login() {
    // Get all our input fields
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!');
        return;
    // Don't continue running the code
    }
    auth.signInWithEmailAndPassword(email, password).then(function() {
        // Declare user variable
        var user = auth.currentUser;
        // Add this user to Firebase Database
        var database_ref = database.ref();
        // Create User data
        var user_data = {
            last_login: Date.now()
        };
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).update(user_data);
        // DOne
        alert('User Logged In!!');
    }).catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code;
        var error_message = error.message;
        alert(error_message);
    });
}
// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email) == true) // Email is good
    return true;
    else // Email is not good
    return false;
}
function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) return false;
    else return true;
}
function validate_field(field) {
    if (field == null) return false;
    if (field.length <= 0) return false;
    else return true;
}

//# sourceMappingURL=index.29dafead.js.map
