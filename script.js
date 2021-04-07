var firebaseConfig = {
  apiKey: "AIzaSyDW3KrksIXp_EFetEajg-jbsOhUO9-O5Zg",
  authDomain: "petition-writing.firebaseapp.com",
  projectId: "petition-writing",
  databaseURL: "https://petition-writing-default-rtdb.firebaseio.com",

  storageBucket: "petition-writing.appspot.com",
  messagingSenderId: "276645271695",
  appId: "1:276645271695:web:c2cfccda006f8f029078fa",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var fname = document.getElementById("fname").value;
  

  const promise = auth
    .createUserWithEmailAndPassword(email, password)
    .then(function () {
      var id = firebase.auth().currentUser.uid;
     
      firebase
        .database()
        .ref("Users/" + id)
        .set({
          fname: fname,
          
          email: email,
          password: password,
        });
    });
  promise.catch((e) => alert(e.message));

  alert("Hurray!Account Created");
}

function signIn() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      var id = firebase.auth().currentUser.uid;
      window.location.replace("index3.html");
      localStorage.setItem("id", id);
    });
  promise.catch((e) => alert(e.message));
  alert("Signed In" + email);
}
