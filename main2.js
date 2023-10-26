// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6DIBIW6B3yJdoCPpMq3A5MZrXTD0aCvU",
  authDomain: "bag-on-rent.firebaseapp.com",
  databaseURL: "https://bag-on-rent-default-rtdb.firebaseio.com",
  projectId: "bag-on-rent",
  storageBucket: "bag-on-rent.appspot.com",
  messagingSenderId: "678481631458",
  appId: "1:678481631458:web:459bc607bdd9db7d5166bb",
  measurementId: "G-LXNPQSYR4H"
};
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var quantity = getInputVal('quantity');
  
  var address = getInputVal('address');
  
  
  // Save message
  saveMessage(quantity,  address);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(quantity,  address){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    quantity:quantity,
    address:address,
    
    
  });
}
