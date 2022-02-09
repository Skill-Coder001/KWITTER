const firebaseConfig = {
      apiKey: "AIzaSyBFFmYPEWZxoHdcw8XlZfyZOkQiL5aUDww",
      authDomain: "kwitter-af4e7.firebaseapp.com",
      projectId: "kwitter-af4e7",
      storageBucket: "kwitter-af4e7.appspot.com",
      messagingSenderId: "23502634581",
      appId: "1:23502634581:web:345f6b26698a334f3bdedc"
    };
    
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
