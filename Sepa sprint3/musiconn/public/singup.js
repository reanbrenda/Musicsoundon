(function() {

    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBi9a9HV_vGn-oqp-Go4SS6DNuzbcZJ1GA",
        authDomain: "auth-a4c81.firebaseapp.com",
        projectId: "auth-a4c81",
        storageBucket: "auth-a4c81.appspot.com",
        messagingSenderId: "828138331557",
        appId: "1:828138331557:web:b33228f82705bd48d51c4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    //Get Elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");

    //Add Login Event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        auth.signInWithEmailAndPassword(email, password).then(user => {
            alert("Login Successful :)");
        }).catch(err => {
            alert(err.message);
        });

    });

    //Add Signup Event
    btnSignup.addEventListener('click', e => {

        //get email and password
        const email = txtEmail.value;
        const password = txtPassword.value;

        const auth = firebase.auth();

        //sign in with firebase auth
        const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {
            alert("Signup Successful :)")
        }).catch(err => {
            alert(err.message);
        });

    });


}());