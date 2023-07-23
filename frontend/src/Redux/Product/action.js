import * as types from "./actionTypes";
import axios from "axios";


const getData = (page, q) => (dispatch) => {

    dispatch({ type: types.GET_PRODUCT_REQUEST });

    axios
        .get(`http://localhost:8080/product?_page=${page}&_limit=9&q=${q}`)
        .then((res) => {
            // console.log('res: ', res);
            dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data })
        })
        .catch((error) => {
            console.log('error: ', error);
            dispatch({ type: types.GET_PRODUCT_FAILURE });
        })
}

export { getData };