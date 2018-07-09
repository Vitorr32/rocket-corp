import {CONTENT_CHANGE_FAILED,CONTENT_CHANGE_PENDING,CONTENT_CHANGE_SUCESS} from './constants';

export const contentChange = (value) => (dispatch) => {
    dispatch({type: CONTENT_CHANGE_PENDING, payload : value});
    fetch('https://api.myjson.com/bins/hg7am')
        .then(response => response.json())
        .then(data => dispatch({type : CONTENT_CHANGE_SUCESS, payload: data}))
        .catch(error => dispatch({type : CONTENT_CHANGE_FAILED, payload: error}));
    
}