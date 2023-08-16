const firebaseConfig = {
    apiKey: "AIzaSyD_IbPMIjGU9J80i5iatK9gzGLRIFDcXk0",
    authDomain: "chat-no-gpt.firebaseapp.com",
    databaseURL: "https://chat-no-gpt-default-rtdb.firebaseio.com/",
    projectId: "chat-no-gpt",
    storageBucket: "chat-no-gpt.appspot.com",
    messagingSenderId: "760406979417",
    appId: "1:760406979417:web:57f98d485af40a1c645248"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML =  "Bem-vindo(a), " + user_name + "!";
    
    function addRoom() {
    
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adicionar sala"
      });
    
      localStorage.setItem("room_name", room_name);
    
      window.location = "chatNOgpt_page.html";
    }
    
    function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    // Para obter os dados do banco de dados e exibi-los na página de salas do ChatRoom
    getData();
    
    function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location="chatNOgpt_page.html";
    }

    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }