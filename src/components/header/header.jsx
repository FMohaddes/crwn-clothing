import React from 'react'
import { connect } from "react-redux";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { ReactComponent as Logo } from './../../assets/4.1 crown.svg'
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { signOutStart } from "../../redux/user/user-action";
import { createStructuredSelector } from "reselect";
import { HeaderContainer , LogoContainer , OptionContainer , OptionLink } from "./header.styles";

function Header( { currentUser , hidden , signOutStart } ) {
     
     return (
          <HeaderContainer >
               <LogoContainer to = '/' >
                    <Logo className = 'logo' />
               </LogoContainer >
               <OptionContainer >
                    <OptionLink to = '/shop' > Shop </OptionLink >
                    <OptionLink to = '/shop' > Contact </OptionLink >
                    {
                         currentUser ? (<OptionLink as = 'div' onClick = { signOutStart } >
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

const mapDispatchProps = dispatch => ({
     signOutStart : () => dispatch( signOutStart() )
})


export default connect( mapStateToProps , mapDispatchProps )( Header );
