//Reducers for Redux
import {CONTENT_CHANGE_FAILED,CONTENT_CHANGE_PENDING,CONTENT_CHANGE_SUCESS} from './constants';
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
        case CONTENT_CHANGE_PENDING:
            return Object.assign({}, state , {isLoading : true, centerSlide : action.payload});
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

export const changeRoute  = (state = initialStateRoute, action = {}) =>{
    switch(action.type){
        default:
            return state;
    }
}

export default combineReducers({
    browser: responsiveStateReducer,
    slideshow: slideshowcontent,
    burgerMenu : burgerMenu,
    changeRoute : changeRoute
})
