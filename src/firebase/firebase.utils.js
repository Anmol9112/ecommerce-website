import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCzXOeNYBJRAawPJMv86QUdKPCJuc6tDBg",
        authDomain: "choose-kindness.firebaseapp.com",
        projectId: "choose-kindness",
        storageBucket: "choose-kindness.appspot.com",
        messagingSenderId: "575812604302",
        appId: "1:575812604302:web:46a575d3ae437353f9d4df",
        measurementId: "G-JHE3B076DQ"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth)return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email }  = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;