import axiosInstance from "../helpers/axios";
import { setAlert } from './alert';
import { GENERATE_SUCCESS,GENERATE_ERROR } from "../constants/constant";


export const generateBudget = (formData,history) => async dispatch => {
    try {
        const res = await axiosInstance.post('/generate/subject/add',formData)
        dispatch({
            type:GENERATE_SUCCESS,
            payload: res.data
        });
        //@TODO success alert message
        history.push('/subject-budget')

    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) errors.forEach(error => dispatch(setAlert(error.msg, 'danger' )));

        dispatch({
            type:GENERATE_ERROR,
            payload: {msg: err.response.statusText, status:err.response.status}
        });
    }
}