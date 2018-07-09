import React, { Component } from 'react';
import {slide as BurguerMenu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

import './menu.css';

class Menu extends Component{

    showSettings (event) {
        event.preventDefault();
    }


    render(){
        return (
            <BurguerMenu right>
                <a href=""><FontAwesomeIcon icon={faHome}/><span>Home</span></a>
                <a href=""><FontAwesomeIcon icon={faUser}/><span>About</span></a>
                <a href=""><FontAwesomeIcon icon={faPlus}/><span>More</span></a>
            </BurguerMenu>
        
        );
    }
}

export default reduxBurgerMenu(Menu);