const firebaseConfig = {
      apiKey: "AIzaSyDqauGky9JAQiyX0Yfc20pFmCpvRjshNpw",
      authDomain: "kwitter-app-6afff.firebaseapp.com",
      databaseURL: "https://kwitter-app-6afff-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-6afff",
      storageBucket: "kwitter-app-6afff.appspot.com",
      messagingSenderId: "319092831353",
      appId: "1:319092831353:web:95a8cc6dabaa2d308dd0a8",
      measurementId: "G-2WZV9RVNYE"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
