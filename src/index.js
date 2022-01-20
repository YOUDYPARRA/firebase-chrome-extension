import { initializeApp } from "firebase/app"
import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore"
const firebaseApp = initializeApp({
    databaseURL: "...",
    apiKey: "AIzaSyCmnjI3t-j-CCBBNgtsbaST1W7U6dYnhXo",
    authDomain: "indep-7e84a.firebaseapp.com",
    projectId: "indep-7e84a",
    storageBucket: "indep-7e84a.appspot.com",
    messagingSenderId: "767348709782",
    appId: "1:767348709782:web:c9d4ca37aa20408e82e5b7",
    measurementId: "G-CPRXX39LCG"
  });

async function add_data() {
  //add data to firestore
  try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

}

const searchButton = document.getElementById("search");
searchButton.addEventListener("click",()=>{
  add_data();
})