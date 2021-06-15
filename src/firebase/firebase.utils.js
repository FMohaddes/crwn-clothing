import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import collection from "../pages/collection/collection";

const config = {
     apiKey            : "AIzaSyDF4F2U_vdSI37PUWaGBN7ozOr6DTDwhOA" ,
     authDomain        : "crwn-db-90e16.firebaseapp.com" ,
     projectId         : "crwn-db-90e16" ,
     storageBucket     : "crwn-db-90e16.appspot.com" ,
     messagingSenderId : "66127951327" ,
     appId             : "1:66127951327:web:5ddcd0bd3540dd7a90406a" ,
     measurementId     : "G-QTXTCSBYWW"
};

firebase.initializeApp( config );


export const createUserProfileDocument = async ( userAuth , additional ) => {
     if ( !userAuth ) return;
     
     const userRef = firestore.doc( `users/${ userAuth.uid }` )
     const snapShot = await userRef.get();
     //Create
     if ( !snapShot.exists ) {
          const { displayName , email } = userAuth;
          const date = new Date()
          console.log( displayName )
          try {
               await userRef.set( {
                    displayName ,
                    email , date , ...additional
               } )
          } catch (err) {
               console.log( 'err creating user' , err.message )
          }
     }
     return userRef;
}

export const addCollectionAndDocuments = async ( collectionKey , objectToAdd ) => {
     
     const collectionRef = firestore.collection( collectionKey )
     const batch = firestore.batch();
     objectToAdd.forEach( obj => {
          const newDocRef = collectionRef.doc()
          batch.set( newDocRef , obj )
     } )
     return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collectionsSnapShop => {
     const transformedCollection = collectionsSnapShop.docs.map( doc => {
          const { title , items } = doc.data()
          return {
               routeName : encodeURI( title.toLowerCase() ) ,
               id        : doc.id , title , items
          }
     } )
    return  transformedCollection.reduce( ( accumulator , collection ) => {
      accumulator[ collection.title.toLowerCase() ] = collection
          return accumulator} , {} )
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt : 'select_account' } );

export const signInWithGoogle = () => auth.signInWithPopup( provider );
export default firebase;


