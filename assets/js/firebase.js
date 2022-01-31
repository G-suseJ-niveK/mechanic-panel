import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAZvu65bSega3vDXAesMRC2PA7Zs-8TCZQ',
  authDomain: 'propio-ea24f.firebaseapp.com',
  databaseURL: 'https://propio-ea24f-default-rtdb.firebaseio.com',
  projectId: 'propio-ea24f',
  storageBucket: 'propio-ea24f.appspot.com',
  messagingSenderId: '503329474144',
  appId: '1:503329474144:web:fce0816976c39b93756505',
  measurementId: 'G-70H1H2PT5G',
};

// Initialize Firebase
initializeApp(firebaseConfig);

let db = firebase.firestore();

const SaveUser = (user) => {
  db.collection('Users')
    .add({
      email: '9',
    })
    .then(function (docRef) {
      console.log('Document writtem with id: ', docRef.id);
    })
    .catch(function (error) {
      console.log('Error adding document: ', error);
    });
};
