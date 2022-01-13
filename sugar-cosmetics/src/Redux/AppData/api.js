import { getDataFailure, getDataRequest, getDataSuccess } from "./action"

export const fetchData=()=>(dispatch)=>{
    dispatch(getDataRequest)
    return fetch(`https://cw-sugarcosmetics-mock-server.herokuapp.com/products`).then(res => res.json()).then((res) => {
       return  dispatch(getDataSuccess(res))
      }
      ).catch(err => dispatch(getDataFailure()))
}