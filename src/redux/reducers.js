//Reducers for Redux
import {CONTENT_CHANGE_FAILED,CONTENT_CHANGE_PENDING,CONTENT_CHANGE_SUCESS,CONTENT_CHANGE_SET,ROUTE_CHANGE} from './constants';
import {combineReducers} from 'redux'
import {responsiveStateReducer} from 'redux-responsive'
import {reducer as burgerMenu} from 'redux-burger-menu';

const initialStateContent = {
    isLoading : false,
    centerSlide: 0,
    error : "" ,
    slideshowcontent : {}
}

export const slideshowcontent = (state = initialStateContent, action = {}) => {
    switch(action.type){
        case CONTENT_CHANGE_SET:
            return Object.assign({}, state , {centerSlide : action.payload});
        case CONTENT_CHANGE_PENDING:
            return Object.assign({}, state , {isLoading : true});
        case CONTENT_CHANGE_SUCESS:
            return Object.assign({}, state , {slideshowcontent: action.payload, isLoading : false});
        case CONTENT_CHANGE_FAILED:
            return Object.assign({}, state , {error: action.payload, isLoading : false});
        default:
            return state;
    }
}

const initialStateRoute = {
    route : 'home'
}

export const routing  = (state = initialStateRoute, action = {}) =>{
    switch(action.type){
        case ROUTE_CHANGE:
            return Object.assign({}, state , {route : action.payload});
        default:
            return state;
    }
}

export default combineReducers({    
    routing : routing,
    browser: responsiveStateReducer,
    slideshow: slideshowcontent,
    burgerMenu : burgerMenu,
})
