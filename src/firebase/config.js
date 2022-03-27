
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBk0ycFJDn6sCm2HKDKeV0U6AyJ0yp0Hzg",
    authDomain: "reactecommerce-f7e21.firebaseapp.com",
    projectId: "reactecommerce-f7e21",
    storageBucket: "reactecommerce-f7e21.appspot.com",
    messagingSenderId: "669210589418",
    appId: "1:669210589418:web:f314d25404a4fec076ff93"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=>{
    return app
}