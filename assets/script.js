

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
  
  // Reference subscribers collection
  var subscribersRef = firebase.database().ref('subscribers');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
  
    // Save message
    saveSubscriber(name, email);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save Subscriber to firebase
  function saveSubscriber(name, email){
    var newSubscriberRef = subscribersRef.push();
    newSubscriberRef.set({
      name: name,
      email:email
    });
  }

  function submitted() {
    alert("Submitted, Thanks!");
  }