import axios from "axios";

import * as actionTypes from "../concense/cartconstent"

const url = "http://localhost:8000";

const addToCart = (id) => async  (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/product/${id}`);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
  } catch (error) {
    console.log("eeror while colling add to cart api");
  }
};


export const removeFromCart=(id)=>(dispatch)=>{
dispatch({type:actionTypes.REMOVE_FROM_CART,payload:id})
}

export default addToCart;
