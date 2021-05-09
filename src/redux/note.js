import * as ActionTypes from './ActionTypes';

export const Note = (state = {errMess: null, notes: null}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_NEW_NOTE:
            return{...state, errMess: null, notes: action.payload};
        case ActionTypes.NOTE_FAILED:
            return{...state, errMess: action.payload};
        case ActionTypes.ADD_NOTE:
            const note = action.payload;
            return{...state, notes: state.notes.concat(note)};
    }
}