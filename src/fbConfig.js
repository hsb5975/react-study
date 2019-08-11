import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCo5fV6tRvhkxaHVMEiRuc3GDAALutexHw",
    authDomain: "pagebook-688d8.firebaseapp.com",
    databaseURL: "https://pagebook-688d8.firebaseio.com",
    projectId: "pagebook-688d8",
    storageBucket: "pagebook-688d8.appspot.com",
    messagingSenderId: "278198920030",
    appId: "1:278198920030:web:057613a85867e7a6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;