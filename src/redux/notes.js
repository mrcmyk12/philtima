import {NOTES} from '../shared/notes';
import * as ActionTypes from './ActionTypes';

export const Notes = (state = NOTES, action) => {
    switch (action.types) {
        case ActionTypes.ADD_NOTE:
            const note = action.payload;
            note.id = state.length;
            note.date = new Date().toISOString();
            return state.concat(note);
        default:
            return state;
    }
}