const firebaseConfig = {
  apiKey: "AIzaSyB7blgHRgOeCg2JVHNfPDqRFTmGVG54EGs",
  authDomain: "tweeter-41818.firebaseapp.com",
  projectId: "tweeter-41818",
  storageBucket: "tweeter-41818.appspot.com",
  messagingSenderId: "417674216220",
  appId: "1:417674216220:web:22875e8b3a561bb9b530d9"
};

    
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
