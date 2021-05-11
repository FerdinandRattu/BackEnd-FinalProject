import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWQzJCKGvND_cxBF2k7qfQGwS1gHQcZ8I",
  authDomain: "web-programming---backend.firebaseapp.com",
  databaseURL: "https://web-programming---backend-default-rtdb.firebaseio.com",
  projectId: "web-programming---backend",
  storageBucket: "web-programming---backend.appspot.com",
  messagingSenderId: "962073692938",
  appId: "1:962073692938:web:734ef3dfde8d3d619288f3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
