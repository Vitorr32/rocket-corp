import React, { Component } from 'react';
import {connect} from 'react-redux';
import {slide as BurguerMenu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { newRouting } from '../../redux/actions';
import { faHome, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

import './menu.css';

const mapStateToProps = state =>{
    return {
    };
}

const mapDispatchToProps = (dispatch) =>{
  return {
      onRouteChange : (route) => dispatch(newRouting(route))
  };
}

class Menu extends Component{

    showSettings (event) {
        event.preventDefault();
    }


    render(){
        return (
            <BurguerMenu right>
                <p onClick={() => this.props.onRouteChange('home')}><FontAwesomeIcon icon={faHome}/><span>Home</span></p>
                <p onClick={() => this.props.onRouteChange('about')}><FontAwesomeIcon icon={faUser}/><span>About</span></p>
                <p ><FontAwesomeIcon icon={faPlus}/><span>More</span></p>
            </BurguerMenu>
        
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(reduxBurgerMenu(Menu));