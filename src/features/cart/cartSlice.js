import { createSlice } from "@reduxjs/toolkit";

 
const initialState = {
    cart: [
    //  {
    //         pizzaId: 12,
    //         name: 'medi',
    //         quantity: 1,
    //         unitPrice: 16,
    //         totalPrice:32
    //     }   
    ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            //payload = newItem
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            //payload - pizzaId
            state.cart = state.cart.filter(item=>item.pizzaId !== action.payload)
         },
        increaseItemQuantity(state, action) { 
            //payload = pizzaId
            const item = state.cart.find((item) => item.pizzaId === action.payload)
            item.quantity++;
            item.totalPrice = item.totalPrice * item.unitPrice;
        },
        decreaseItemQuantity(state, action) {
                  //payload = pizzaId
            const item = state.cart.find((item) => item.pizzaId === action.payload)
            item.quantity--;
            item.totalPrice = item.totalPrice * item.unitPrice;
         },
        clearCart(state) {
            state.cart= []
        },
    }
})

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions

export default cartSlice.reducer;

//reselect for optimization
//redux selector function starts with get
export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
//redux selector function starts with get
export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getCart = state => state.cart.cart
export const getUserName =state => state.user.username