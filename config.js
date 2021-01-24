import firebase from 'firebase';

let config ={
    apiKey: "AIzaSyA2LASWD5VFcoDexmXtKStImaqDSDQjmtk",
    authDomain: "reactdm-a32cf.firebaseapp.com",
    databaseURL: "https://reactdm-a32cf-default-rtdb.firebaseio.com",
    projectId: "reactdm-a32cf",
    storageBucket: "reactdm-a32cf.appspot.com",
    messagingSenderId: "914479955707",
    appId: "1:914479955707:web:320c2a20635e6d68413a5e",
    measurementId: "G-9TVQ1JM3N5"

};
//if (!firebase.apps.length){
    let app = firebase.initializeApp(config);
//}
export const db = app.database();