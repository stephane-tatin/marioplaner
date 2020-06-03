import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
  
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBsRssU3EH1yG89RMYrkJ2UEBKrdE_uP1E",
    authDomain: "marioplaner-762f2.firebaseapp.com",
    databaseURL: "https://marioplaner-762f2.firebaseio.com",
    projectId: "marioplaner-762f2",
    storageBucket: "marioplaner-762f2.appspot.com",
    messagingSenderId: "224838037681",
    appId: "1:224838037681:web:a86fbe7842cc5ce393f290",
    measurementId: "G-JQWD82MP6S"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  firebase.firestore()

  export default firebase;