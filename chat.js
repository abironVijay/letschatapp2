  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBJb7J6R7jYJKeAEgFhEboqYNSUy5RNBfQ",
    authDomain: "letschatwebapp-ae56e.firebaseapp.com",
    projectId: "letschatwebapp-ae56e",
    storageBucket: "letschatwebapp-ae56e.appspot.com",
    messagingSenderId: "1093146449732",
    appId: "1:1093146449732:web:27a9b1da60633ad11c2911"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



