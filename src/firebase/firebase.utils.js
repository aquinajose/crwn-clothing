import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBcupVj3LNMUiFzXE09NLR38EWMoEYM5d8",
    authDomain: "crwn-clothing-23c32.firebaseapp.com",
    databaseURL: "https://crwn-clothing-23c32.firebaseio.com",
    projectId: "crwn-clothing-23c32",
    storageBucket: "crwn-clothing-23c32.appspot.com",
    messagingSenderId: "1032607071303",
    appId: "1:1032607071303:web:d872f39b097531b005c562",
    measurementId: "G-3GL6WB2ZNL"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists){

        const {displayName,email}=userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData  
            })
        }
        catch(error){
            console.log('Error creating user',error.message)
        }
    }
    return userRef;

}
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore = firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () =>auth.signInWithPopup(provider);

export default firebase;