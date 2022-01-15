

export const actionConstants = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    DELETE_PRODUCT: "DELETE_PRODUCT",
    APPLY_DISCOUNT: "APPLY_DISCOUNT"
    
}

// action creators

export const addToCart = (product) => {    
    return {
        type: actionConstants.ADD_TO_CART,
        payload: {...product, quantity: 1}
    }
}

export const removeFromCart = (id, price) => {    
    return {
        type: actionConstants.REMOVE_FROM_CART,
        payload: {
            id,
            price
        }
    }
}

export const deleteProduct = (id, price) => {
    return {
        type: actionConstants.DELETE_PRODUCT,
        payload: {
            id, price
        }
    }
}

export const applyDiscount = (discount) => {
    return {
        type: actionConstants.APPLY_DISCOUNT,
        payload: discount
    }
}