import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

// console.log('Firebase API Key:', process.env.REACT_APP_FIREBASE_API_KEY);

const firebaseConfig = {
	apiKey: "AIzaSyAVYY-gNXp5LvmoLy2e_M5S3UGJ3WFN9-Q",
	authDomain: "primemax-b9979.firebaseapp.com",
	projectId: "primemax-b9979",
	storageBucket: "primemax-b9979.appspot.com",
	messagingSenderId: "931175185092",
	appId: "1:931175185092:web:8458f00b5f88a3aacbe791",
	measurementId: "G-MY3XPQDJY4",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const addDataToFirestore = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(firestore, collectionName), data);
        // console.log('Document written with ID: ', docRef.id);


    } catch (e) {
        // console.error('Error adding document: ', e);
    }
};

export default firestore;



