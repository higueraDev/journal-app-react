// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyCRHAX2rLnleTEsDzNMPL-RZw8GmN6qdCI",
	authDomain: "journal-app-8276a.firebaseapp.com",
	projectId: "journal-app-8276a",
	storageBucket: "journal-app-8276a.appspot.com",
	messagingSenderId: "37006976435",
	appId: "1:37006976435:web:5e07ed8f46a04fddd397c6",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
