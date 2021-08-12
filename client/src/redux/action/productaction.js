import axios from "axios";
import * as acction from "../concense/productConstent";

const url = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products`);
    dispatch({ type: acction.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: acction.GET_PRODUCT_FAIL, payload: error.response });
  }
};

export const getProductDetails=(id)=> async (dispatch)=>{
  try {
    const { data } = await axios.get(`${url}/product/${id}`);
    dispatch({ type: acction.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: acction.GET_PRODUCT_DETAIL_FAIL, payload: error.response });
  }
}
