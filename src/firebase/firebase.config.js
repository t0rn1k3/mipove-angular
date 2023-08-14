import firebase from "firebase/app";
import "firebase/storage";

import { getStorage, ref, listAll } from "firebase/storage";

const storage = getStorage();


function initialize() {
    var firebaseConfig = {
      apiKey: '<your-api-key>',
      authDomain: '<your-auth-domain>',
      databaseURL: '<your-database-url>',
      storageBucket: '<your-storage-bucket-url>'
    };
    firebase.initializeApp(firebaseConfig);
  
    var storage = firebase.storage();y
  }
