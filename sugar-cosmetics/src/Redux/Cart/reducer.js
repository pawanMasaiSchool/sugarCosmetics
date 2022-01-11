import { actionConstants } from "./actions";

const initState = {
    cart: [],
    cartQuantity: 0
}

const cartReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.ADD_TO_CART:
            // do something
            break;
        default:
            return state
    }
}

export default cartReducer