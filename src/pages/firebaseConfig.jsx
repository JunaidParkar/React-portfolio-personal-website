import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  "your firebase credentials here"
};

const app = initializeApp(firebaseConfig);
export const realtimeDB = getDatabase(app)
// const analytics = getAnalytics(app);

export default app
