import "firebase/database";
import { initializeApp } from "firebase/app";


const config = {
    apiKey: "AIzaSyCzEGJdHgLMDLrX9JM-1Qd218CqOCDPeBE",
    authDomain: "firechat-vue-ddb50.firebaseapp.com",
    projectId: "firechat-vue-ddb50",
    storageBucket: "firechat-vue-ddb50.appspot.com",
    messagingSenderId: "458243766591",
    appId: "1:458243766591:web:c2628b5fda534a6935bb8a",
    measurementId: "G-VKWDYS68LN"
}

const db = initializeApp(config);
export default db;