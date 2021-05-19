import React from 'react'
import { connect } from "react-redux";
import { addItem , clearItemFromCard , removeItem } from "../../redux/cart/cart-action";
import {
     CheckoutItemContainer ,
     ImageContainer , QuantityContainer ,
     RemoveButtonContainer ,
     TextContainer
} from "./checkout-item.styles";

function CheckItem( { cartItem , clearItem , addItem , removeItem } ) {
     const { name , price , quantity , imageUrl } = cartItem
     return (
          <CheckoutItemContainer >
               <ImageContainer >
                    <img alt = "item" src = { imageUrl } />
               </ImageContainer >
               <TextContainer >{ name }
               </TextContainer >
               <QuantityContainer >
                    <div className = 'arrow' onClick = { () => removeItem( cartItem ) } >&#10094;</div >
                    <span className = 'value' > { quantity } </span >
                    <div className = 'arrow' onClick = { () => addItem( cartItem ) } >&#10095;</div >
               </QuantityContainer >
               <TextContainer >{ price }
               </TextContainer >
               <RemoveButtonContainer onClick = { () => clearItem( cartItem )
               } >
                    &#10005;
               </RemoveButtonContainer >
          </CheckoutItemContainer >
     );
}

const mapDispatchProps = dispatch => ({
     clearItem  : item => dispatch( clearItemFromCard( item ) ) ,
     addItem    : item => dispatch( addItem( item ) ) ,
     removeItem : item => dispatch( removeItem( item ) )
})

export default connect( null , mapDispatchProps )( CheckItem );
