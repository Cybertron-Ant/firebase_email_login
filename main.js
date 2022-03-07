//firebase credentials
const config = {
  apiKey: "AIzaSyBnduQWcU_8ArMqPKW_AiYK2g2x-UdQFBc",
  authDomain: "project-one-bbbef.firebaseapp.com",
  databaseURL: "https://project-one-bbbef-default-rtdb.firebaseio.com",
  projectId: "project-one-bbbef",
  storageBucket: "project-one-bbbef.appspot.com",
  messagingSenderId: "57284089155",
  appId: "1:57284089155:web:f1a0159e1915e174938bf6",
  measurementId: "G-LW4X4W1F55"
};

firebase.initializeApp(config);

//initialize firebase 'auth' and 'database' variables
const auth = firebase.auth();
const database = firebase.database();


//declare 'register' function
function register() {
  
  //grab reference to all input fields
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var age = document.getElementById('age').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
}//end register