

{/* // Your web app's Firebase configuration */}
  var firebaseConfig = {
    apiKey: "AIzaSyDuMAQKyfi76z78wHrGiuuZPZXbQJ_rN0s",
    authDomain: "bmusic-be14a.firebaseapp.com",
    databaseURL: "https://bmusic-be14a.firebaseio.com",
    projectId: "bmusic-be14a",
    storageBucket: "",
    messagingSenderId: "98841648090",
    appId: "1:98841648090:web:ea27948895f9c7f7c6bee3",
    measurementId: "G-ZSTXCP04LH"
  };
  firebase.initializeApp(firebaseConfig);


  var database = firebase.database();
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // // Show alert
    // document.querySelector('.alert').style.display = 'block';
  
    // // Hide alert after 3 seconds
    // setTimeout(function(){
    //   document.querySelector('.alert').style.display = 'none';
    // },3000);
  
    // // Clear form
    // document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }