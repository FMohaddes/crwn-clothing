import React from 'react'
import { connect } from "react-redux";
import { auth } from '../../firebase/firebase.utils'
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { ReactComponent as Logo } from './../../assets/4.1 crown.svg'
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { createStructuredSelector } from "reselect";
import { HeaderContainer , LogoContainer , OptionContainer , OptionLink } from "./header.styles";

function Header( { currentUser , hidden } ) {
     
     return (
          <HeaderContainer >
               <LogoContainer to = '/' >
                    <Logo className = 'logo' />
               </LogoContainer >
               <OptionContainer >
                    <OptionLink to = '/shop' > Shop </OptionLink >
                    <OptionLink to = '/shop' > Contact </OptionLink >
                    {
                         currentUser ? (<OptionLink as = 'div' onClick = { () =>
                                   auth.signOut() } >
                                   Sign Out </OptionLink >) :
                              (<OptionLink to = '/signin' > Sign in </OptionLink >)
                    }
                    <CartIcon />
               </OptionContainer >
               {
                    hidden ? null : <CartDropdown />
               }
          </HeaderContainer >
     );
}

const mapStateToProps = createStructuredSelector( {
     currentUser : selectCurrentUser ,
     hidden      : selectCartHidden
} )


export default connect( mapStateToProps )( Header );
