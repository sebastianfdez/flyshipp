import firebase from "firebase";
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: process.env.FLYSHIPP_MOBILE_API_KEY,
  authDomain: process.env.FLYSHIPP_MOBILE_AUTH_DOMAIN,
  projectId: process.env.FLYSHIPP_MOBILE_PROJECT_ID,
  storageBucket: process.env.FLYSHIPP_MOBILE_STORAGE_BUCKET,
  messagingSenderId: process.env.FLYSHIPP_MOBILE_MESSAGING_SENDER_ID,
  appId: process.env.FLYSHIPP_MOBILE_APP_ID,
  measurementId: process.env.FLYSHIPP_MOBILE_MEASUREMENT_ID,
});

export const auth = app.auth();
export default app;
