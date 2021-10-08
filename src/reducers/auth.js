import {
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from '../constants/constant';

const initialState = {
    loading:true,
    user:null
};

export default function(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false
            }
        case LOGIN_FAIL:
            //localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

        default:
            return state;
    }
}