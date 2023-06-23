// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD5QPA9Y0iKzG4uDLV8SmNZJebI6WbbbRc',
  authDomain: 'ajays-homepage.firebaseapp.com',
  databaseURL: 'https://ajays-homepage-default-rtdb.firebaseio.com',
  projectId: 'ajays-homepage',
  storageBucket: 'ajays-homepage.appspot.com',
  messagingSenderId: '228248040603',
  appId: '1:228248040603:web:0563cf3f3c3594e607823e',
  measurementId: 'G-MVYEMV7RQJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
