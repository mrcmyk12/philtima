import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const fetchNotes = () => dispatch => {
    dispatch(notesLoading());

    return fetch(baseUrl + 'notes')
        .then(response => {
            if(response.ok){
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(notes => dispatch(addNotes(notes)))
    .catch(error => dispatch(notesFailed(error.message)));
}
;
export const notesLoading = () => ({
    type:ActionTypes.NOTES_LOADING
})

export const notesFailed = errMess => ({
    type:ActionTypes.NOTES_FAILED,
    payload: errMess
})

export const addNotes = notes => ({
    type: ActionTypes.ADD_NOTES,
    payload: notes
})

export const addNote = note => ({
    type: ActionTypes.ADD_NOTE,
    payload: note
});

export const postNote = (id, title, content, date) => dispatch => {

    const newNote = {
        id,
        title,
        content,
    }
    newNote.date = new Date().toISOString();

    return fetch(baseUrl + 'notes', {
        method:"POST",
        body: JSON.stringify(newNote),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if(response.ok){
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error =>{ throw error; }
    )
    .then(response => response.json())
    .then(response => dispatch(addNote(response)))
    .catch(error => {
        console.log('post note', error.message);
        alert('Your note could not be posted \nError: ' + error.message);
    });
};


