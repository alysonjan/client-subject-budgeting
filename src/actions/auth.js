import axiosInstance from "../helpers/axios";
import { setAlert } from "./alert";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "../constants/constant";


// import setAuthToken from '../helpers/setAuthToken';

//Load User
// export const loadUser = () => async dispatch => {
    
//     if (localStorage.token) {
//         setAuthToken(localStorage.token);
//     }
//     try {
//         const res = await axiosInstance.get()
//     } catch (err) {
        
//     }
// }

//login User
export const login = (email,password,setIsAuthenticated) => async dispatch => {

    const body = JSON.stringify({email,password});

    try {
        const res = await axiosInstance.post('/user/login', body);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        setIsAuthenticated(true)
        localStorage.setItem('token', res.data.encryptedToken);



    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};