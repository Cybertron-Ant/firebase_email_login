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
  firstName = document.getElementById('firstName').value;
  lastName = document.getElementById('lastName').value;
  age = document.getElementById('age').value;
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;
  
}//end register


//declare 'login' function
function login() {
  
  //grab reference to 'email' and 'password' input fields
  email = document.getElementById('email').value;
  password = document.getElementById('password').value;
  
}///end login


//define a function to validate email
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  
  if (expression.test(email) == true) {
    //email is valid
    return true;
  } else {
    return false;
  }
}


//define a function to validate the password
function validate_password(password) {
  //Firebase only accepts password with more than 6 characters
  if(password.length < 6) {
    return false;
  } else {
    return true;
  }
}



if (validate_email(email) == false|| validate_password(password) == false) {
  alert('email or password is of incorrect format');
  
  //don't run anymore code if email or password is incorrect
  return;
}


//continue with authentication
auth().createUserWithEmailAndPassword(email, password)
.then(function() {
  
  var user = auth.currentUser;
  
  //add user to the Firebase database
  var database_ref = database.ref();
  
  
  //create user data
  var user_data = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    email: email,
    password: password,
    //check when user last logged in
    last_login: Date.now()
  }
  
  //push 'user_data' to firebase database
  database.ref.child('users/' + user.uid).set(user_data);
  
  
  alert('user created');
  
})
.catch(function(error) {
  
   var error = error.code;
   var error_message = error.message;
   
   alert(error_message);
   
});

