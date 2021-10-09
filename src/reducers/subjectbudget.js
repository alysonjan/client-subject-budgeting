import { GENERATE_BUDGET,GENERATE_ERROR } from "../constants/constant";

const initialState = {
    loading:true,
    subject:null,
    subjectBudgets:[],
    error:{}
};

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GENERATE_BUDGET:
            return{
                ...state,
                ...payload,
                loading: false
            }
        case GENERATE_ERROR:
            return {
                ...state,
                error: payload,
                loading:false
            };
    
        default:
            return state;
    }
}


