import { actionConstraint } from "./actionType"

export const getDataRequest=()=>(
    {
        type:actionConstraint.GET_DATA_REQUEST,
    payload:{
        isLoading:true,
        isError:false
    }}
)
export const getDataSuccess=(datas)=>(
    {
        type:actionConstraint.GET_DATA_SUCCESS,
    payload:{
        isLoading:false,
        isError:false,
        datas:datas
    }}
)
export const getDataFailure=()=>(
    {
        type:actionConstraint.GET_DATA_FAILURE,
    payload:{
        isLoading:false,
        isError:true,
        
    }}
)
