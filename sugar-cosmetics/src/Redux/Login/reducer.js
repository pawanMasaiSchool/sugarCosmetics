import { actionConstants } from "./actions";

const initState = {
    isLoading: false,
    isAuth: false,
    isError: false,
    token: ""    
}

const loginReducer = (state = initState, action) => {
    switch(action.type){
        case actionConstants.LOGIN_USER_REQUEST:
            // do something
            break;
        default:
            return state
    }
}

export default loginReducer