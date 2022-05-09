import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyASFzJ5TuuEVEJT4V8hWz9XpOPsB4dl4xE",
  authDomain: "verix-d8f82.firebaseapp.com",
  projectId: "verix-d8f82",
  storageBucket: "verix-d8f82.appspot.com",
  messagingSenderId: "1057724321461",
  appId: "1:1057724321461:web:c7a001b43835e506a7b8fc",
  measurementId: "G-4WT786C0NG"
};

const app = initializeApp(firebaseConfig);
export const realtimeDB = getDatabase(app)
// const analytics = getAnalytics(app);

export default app