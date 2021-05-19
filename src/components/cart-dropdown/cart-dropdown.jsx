import React from 'react'
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";

import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom'

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { toggleCartHidden } from "../../redux/cart/cart-action";
import {
     CartDropdownButton ,
     CartDropdownContainer ,
     CartItemsContainer ,
     EmptyMessageContainer
} from "./cart-dropdown.styles";

const CartDropdown = ( { cartItems , history , dispatch } ) => (
     <CartDropdownContainer >
          <CartItemsContainer >
               {
                    cartItems.length ?
                         (cartItems.map( cartItem => (
                              <CartItem id = { cartItem.id } item = { cartItem } />
                         ) ))
                         : (<EmptyMessageContainer >Your cart is empty</EmptyMessageContainer >)
               }
               
               <CartDropdownButton onClick = { () => {
                    dispatch( toggleCartHidden() );
                    history.push( '/checkout' )
               } } >
                    Go To Checkout </CartDropdownButton >
          </CartItemsContainer >
     </CartDropdownContainer >
)

const mapStateToProps = createStructuredSelector( {
     cartItems : selectCartItems
} )

export default withRouter( connect( mapStateToProps )( CartDropdown ) );
