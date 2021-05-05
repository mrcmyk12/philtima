import * as ActionTypes from './ActionTypes';

export const addNote = (id, title, content, date) => ({
    type:ActionTypes.ADD_NOTE,
    payload: {
        id,
        title,
        content,
        date
    }
});