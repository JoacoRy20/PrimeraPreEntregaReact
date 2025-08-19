import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBe9yTFLoylwD7XKvD8DSh6o1Zh5ueALEI",
  authDomain: "tienda-react-54bed.firebaseapp.com",
  projectId: "tienda-react-54bed",
  storageBucket: "tienda-react-54bed.firebasestorage.com",
  messagingSenderId: "782336106838",
  appId: "1:782336106838:web:64d4d2d3d8279173aa76f7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
