import { cartActionTypes } from "./cart-types";

export const toggleCartHidden = () => ({
     type : cartActionTypes.TOGGLE_CART_HIDDEN ,
})

export const addItem = item => ({
     type    : cartActionTypes.ADD_ITEMS ,
     payload : item
})

export const removeItem = item => ({
     type    : cartActionTypes.REMOVE_ITEM ,
     payload : item
})


export const clearItemFromCard = item => ({
     type    : cartActionTypes.CLEAR_ITEM_FROM_CARD ,
     payload : item
})

export const clearCart = () => ({
     type: cartActionTypes.CLEAR_CART
});