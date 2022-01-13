import { actionConstraint } from "./actionType";

const initialState={
    datas:[],
    isLoading:false,
    isError:false
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
                ...state,isLoading:false,isError:false,datas:action.payload.datas
            }
        }
        case actionConstraint.GET_DATA_FAILURE:{
            return {
                ...state,isLoading:false,isError:false
            }
        }
    default:
        return state
    }
}