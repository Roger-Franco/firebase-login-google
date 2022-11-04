import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVc3F5KWT1nWzrEE2lhUlGPXgvzUKoLHE",
  authDomain: "auth-de36b.firebaseapp.com",
  projectId: "auth-de36b",
  storageBucket: "auth-de36b.appspot.com",
  messagingSenderId: "1085922552765",
  appId: "1:1085922552765:web:d569144f98001271d940d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName
      const email = result.user.email
      const profilePic = result.user.photoURL

      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("profilePic", profilePic)
    })
    .catch((error) => {
      console.log(error);
    })
}