import React from 'react'
import HomePage from "./pages/homepage/home-page";
import ShopPage from "./pages/shop/shop";
import SignInUP from "./pages/sign-in-up/sign-in-up";
import Header from "./components/header/header";

import './App.css';

import { Route , Switch , Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";
import { auth , createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
     
     unsubscribeFromAuth = null;
     
     componentDidMount() {
          this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
               if ( userAuth ) {
                    const userRef = await createUserProfileDocument( userAuth );
                    
                    userRef.onSnapshot( snapshot => {
                         this.props.setCurrentUser( {
                              id : snapshot.id ,
                              ...snapshot.data()
                         } )
                    } )
               } else
                    this.props.setCurrentUser( userAuth )
          } );
     }
     
     componentWillUnmount() {
          this.unsubscribeFromAuth();
     }
     
     render() {
          return (
               <div >
                    <Header />
                    <Switch >
                         <Route exact path = '/' component = { HomePage } />
                         <Route path = '/shop' component = { ShopPage } />
                         <Route exact path = '/signin'
                              render = { () => this.props.currentUser ?
                                   (<Redirect to = '/' />) : (<SignInUP />) } />
                    </Switch >
               </div >
          );
     }
}

const mapStateToProps = ( { user } ) => ({
     currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
     setCurrentUser : user => dispatch( setCurrentUser( user ) )
})

export default connect( mapStateToProps , mapDispatchToProps )( App );


/*   React.useEffect( () => {
 console.log('i')
 const unsubscribeFromAuth = auth.onAuthStateChanged( user => {
 setCurrentUser( { currentUser : user } )
 } )
 return () => {
 unsubscribeFromAuth();
 console.log('a')
 }
 } , [] )*/
 