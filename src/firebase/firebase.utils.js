import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
     apiKey            : "AIzaSyDF4F2U_vdSI37PUWaGBN7ozOr6DTDwhOA" ,
     authDomain        : "crwn-db-90e16.firebaseapp.com" ,
     projectId         : "crwn-db-90e16" ,
     storageBucket     : "crwn-db-90e16.appspot.com" ,
     messagingSenderId : "66127951327" ,
     appId             : "1:66127951327:web:5ddcd0bd3540dd7a90406a" ,
     measurementId     : "G-QTXTCSBYWW"
};

export const createUserProfileDocument = async ( userAuth , additional ) => {
     if ( !userAuth ) return;
     
     const userRef = firestore.doc( `users/${ userAuth.uid }` )
     const snapShot = await userRef.get();
     //Create
     if ( !snapShot.exists ) {
          const { displayName , email } = userAuth;
          const date = new Date()
          console.log(displayName)
          try {
               await userRef.set( { displayName ,
                    email , date , ...additional
               } )
          } catch (err) {
               console.log( 'err creating user' ,err.message )
          }
     }
     return userRef;
}

firebase.initializeApp( config );

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt : 'select_account' } );

export const signInWithGoogle = () => auth.signInWithPopup( provider );
export default firebase;


