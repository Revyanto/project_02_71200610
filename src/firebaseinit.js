import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBdH2XcAaB3SdNVfq7Jmj0jj96gO9kbsqw",
    authDomain: "projectchatting-3dac2.firebaseapp.com",
    projectId: "projectchatting-3dac2",
    storageBucket: "projectchatting-3dac2.appspot.com",
    messagingSenderId: "197847316926",
    appId: "1:197847316926:web:1b8126b7ff1096e08d21ef"
}

export default firebase.initializeApp(config);
