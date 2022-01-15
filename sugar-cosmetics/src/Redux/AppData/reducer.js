import { actionConstraint } from "./actionType";

const initialState={
    datas:[],
    isLoading:false,
    isError:false,
    isProductFound:false
}
export function appReducer(state=initialState,action)
{
    switch(action.type)
    {
        case actionConstraint.GET_DATA_REQUEST:{
            return {
                ...state,isLoading:true,isError:false
            }
        }
        case actionConstraint.GET_DATA_SUCCESS:{
            return {
                ...state,isLoading:false,isError:false,datas:action.payload.datas,isProductFound:action.payload.datas.length?false:true
            }
        }
        case actionConstraint.GET_DATA_FAILURE:{
            return {
                ...state,isLoading:false,isError:true
            }
        }
    default:
        return state
    }
}