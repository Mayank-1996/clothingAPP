import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAsBnUjL4CcTV_Zmb9pgfUy5VJrpETsSQU",
  authDomain: "banded-splicer-290818.firebaseapp.com",
  databaseURL: "https://banded-splicer-290818.firebaseio.com",
  projectId: "banded-splicer-290818",
  storageBucket: "banded-splicer-290818.appspot.com",
  messagingSenderId: "113664508122",
  appId: "1:113664508122:web:37cb3acafa7f88c177e5e3",
  measurementId: "G-QFJ386VFKW",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //this returs a queryreference

  const snapShot = await userRef.get(); //this returs a querySnapshot

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log("==", collectionRef, objectsToAdd);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
