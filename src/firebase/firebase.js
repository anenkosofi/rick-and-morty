import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCqoNTbecqc-aFYCx29nI4EOyUtiSI3mxs',
  authDomain: 'rick-and-morty-8a9cd.firebaseapp.com',
  projectId: 'rick-and-morty-8a9cd',
  storageBucket: 'rick-and-morty-8a9cd.appspot.com',
  messagingSenderId: '868605237754',
  appId: '1:868605237754:web:f69dbe65416a0365682c43',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
