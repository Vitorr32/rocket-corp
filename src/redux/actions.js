import {CONTENT_CHANGE_FAILED,CONTENT_CHANGE_PENDING,CONTENT_CHANGE_SUCESS,CONTENT_CHANGE_SET} from './constants';

export const contentChange = (value) => (dispatch) => { 
    dispatch({type: CONTENT_CHANGE_PENDING});
    fetch('https://my-json-server.typicode.com/vitorr32/rocket-corp/slideshow')
        .then(response => response.json())
        .then(data => {
            //Everything unde this should be processed in the server side not here
            const toState = [];
            //Checks to wrap if bigger than array or minor than zero
            if(value > data.length - 1){ value = 0;}
            if(value < 0) {value = data.length - 1;}

            //If going back            
            if(value === data.length - 1){
                toState.push(data[data.length-2]);
                toState.push(data[data.length-1]);
                toState.push(data[0]);
            }
            //If going forward
            else if(value === 0){
                toState.push(data[data.length-1]);
                toState.push(data[0]);
                toState.push(data[1]);
            }
            else{
                toState.push(data[value-1]);
                toState.push(data[value]);
                toState.push(data[value+1]);
            }

            dispatch({type: CONTENT_CHANGE_SET, payload : value});
            dispatch({type : CONTENT_CHANGE_SUCESS, payload: toState})
        })
        .catch(error => dispatch({type : CONTENT_CHANGE_FAILED, payload: error}));
    
}