var firebaseConfig = {
  apiKey: "AIzaSyDW3KrksIXp_EFetEajg-jbsOhUO9-O5Zg",
  authDomain: "petition-writing.firebaseapp.com",
  projectId: "petition-writing",
  storageBucket: "petition-writing.appspot.com",
  messagingSenderId: "276645271695",
  appId: "1:276645271695:web:c2cfccda006f8f029078fa",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signup() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));
  alert("Hurray!Account Created");
}

function login() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value).then(function(){
    window.location.replace("file:///D:/Desktop/Git%20and%20Github/index3.html");
  });
  promise.catch((e) => alert(e.message));
  alert("Signed In" + email);
}

auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    alert("Active User " + email);

    //Take user to a different or home page

    //is signed in
  } else {
    alert("No Active User");
    //no user is signed indd
  }
});
