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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name",user_name);

    window.location="chat_room.html"
}



