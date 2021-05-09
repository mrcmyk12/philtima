import * as ActionTypes from './ActionTypes';

export const Shopping = (state = {
                    isLoading:true,
                    errMess: null,
                    shopping: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            return{...state, isLoading: false, errMess: null,  shopping: action.payload};
        case ActionTypes.ITEM_LOADING:
            return{...state, isLoading: true, errMess:null, shopping: []};
        case ActionTypes.ITEM_FAILED:
            return{...state, isLoading: true, errMess: action.payload}
        default:
            return state;
    }
}