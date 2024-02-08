var firebaseConfig = {
    apiKey: "AIzaSyDw2u8VajKg8Jy_TedqoYUONW5fKq3pHcA",
    authDomain: "kwitter-821b8.firebaseapp.com",
    databaseURL: "https://kwitter-821b8-default-rtdb.firebaseio.com",
    projectId: "kwitter-821b8",
    storageBucket: "kwitter-821b8.appspot.com",
    messagingSenderId: "1050509091270",
    appId: "1:1050509091270:web:9a47b82ef0bb7d724c92c7",
    measurementId: "G-7XSBVJBJ1M"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name")
   
   function Send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0     
    });
    document.getElementById("msg").value="";
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0

    })
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
