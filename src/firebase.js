import firebase from 'firebase';
// authentication
import "firebase/auth";

//realtime database
import "firebase/database";
//storage can store images , videos ...
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDvnsP1Og1lty56VKJrqiJ-k_Im1XMX-n4",
    authDomain: "vootclone-1.firebaseapp.com",
    projectId: "vootclone-1",
    storageBucket: "vootclone-1.appspot.com",
    messagingSenderId: "825582163169",
    appId: "1:825582163169:web:5f63606e37b9239bf853a0"
};
firebase.initializeApp(firebaseConfig);

export default firebase;