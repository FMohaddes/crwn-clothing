import React , { lazy , Suspense } from 'react'
import './App.css';

import ShopPage from "./pages/shop/shop";
import SignInUP from "./pages/sign-in-up/sign-in-up";
import Header from "./components/header/header";
import CheckOut from "./pages/checkout/checkout";

import { Route , Switch , Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user-action";
import Spinner from "./components/spinner/spinner";
import ErrorBoundary from "./components/ErrorBoundary/error-boundary";

const HomePage = lazy( () => import("./pages/homepage/home-page") )

function App( { checkUserSession , currentUser } ) {
     
     React.useEffect( () => {
          checkUserSession();
     } , [] )
     
     
     return (
          <div >
               <Header />
               <Switch >
                    <ErrorBoundary >
                         <Suspense fallback = { <Spinner /> } >
                              <Route exact path = '/' component = { HomePage } />
                              <Route path = '/shop' component = { ShopPage } />
                              <Route exact path = '/checkout' component = { CheckOut } />
                              <Route exact path = '/signin'
                                   render = { () => currentUser ?
                                        (<Redirect to = '/' />) : (<SignInUP />) } />
                         </Suspense >
                    </ErrorBoundary >
               </Switch >
          </div >
     );
     
}

const mapStateToProps = createStructuredSelector( {
     currentUser : selectCurrentUser ,
} )

const mapDispatchToProps = dispatch => ({
     checkUserSession : () => dispatch( checkUserSession() )
})


export default connect( mapStateToProps , mapDispatchToProps )( App );

/*   React.useEffect( () => {
 const unsubscribeFromAuth = auth.onAuthStateChanged( user => {
 setCurrentUser( { currentUser : user } )
 } )
 return () => {
 unsubscribeFromAuth();
 }
 } , [] )*/


//      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
//           if ( userAuth ) {
//                const userRef = await createUserProfileDocument( userAuth );
//
//                userRef.onSnapshot( snapshot => {
//                     this.props.setCurrentUser( {
//                          id : snapshot.id ,
//                          ...snapshot.data()
//                     } )
//                } )
//           }
//                this.props.setCurrentUser( userAuth )
//      } );
// }


// componentWillUnmount() {
//      this.unsubscribeFromAuth();
// }


 