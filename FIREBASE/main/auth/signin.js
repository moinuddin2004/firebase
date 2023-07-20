import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyB9z6SMTOt5NIsqqqQzb8I-Gb8q_wrSBvM",
    authDomain: "auth-18c9d.firebaseapp.com",
    projectId: "auth-18c9d",
    storageBucket: "auth-18c9d.appspot.com",
    messagingSenderId: "837189411819",
    appId: "1:837189411819:web:2bea68129dcdcd4936efae",
    measurementId: "G-RYY383NERQ"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  let btn=document.getElementById("btni")
  btn.addEventListener("click",()=>{

let email = document.getElementById("ei").value
let password = document.getElementById("pi").value
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user.email);
    // ...
    alert("done");
    // ...
    location.href="w.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode,errorMessage);
   
    alert("not done");
  });



})