// This import loads the firebase namespace along with all its type information.
// import * as firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
// import * as auth from 'firebase/auth';

//NEWS IMPORTS
import "firebase/compat/auth";
import firebase from "firebase/compat/app";

import * as database from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export { firebase, auth, database };
