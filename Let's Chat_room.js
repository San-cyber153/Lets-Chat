// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAQX3ykbCFvst9hi1i_1QdPDdhvyp1mOwY",
    authDomain: "let-s-chat-560b7.firebaseapp.com",
    databaseURL: "https://let-s-chat-560b7-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-560b7",
    storageBucket: "let-s-chat-560b7.appspot.com",
    messagingSenderId: "986823459195",
    appId: "1:986823459195:web:aabb8d9aa0e145b7dfbdde"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
