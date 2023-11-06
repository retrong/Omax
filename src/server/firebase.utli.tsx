import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAVYY-gNXp5LvmoLy2e_M5S3UGJ3WFN9-Q',
	authDomain: 'primemax-b9979.firebaseapp.com',
	projectId: 'primemax-b9979',
	storageBucket: 'primemax-b9979.appspot.com',
	messagingSenderId: '931175185092',
	appId: '1:931175185092:web:8458f00b5f88a3aacbe791',
	measurementId: 'G-MY3XPQDJY4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
