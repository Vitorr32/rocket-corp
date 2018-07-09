import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import './headline.css'

class Headline extends Component{
    render(){
        return(
            <div className="headlineholder">
                <h1 className="headline">GOING <FontAwesomeIcon icon={faArrowUp}/> ?</h1>
                <p className="subtitle">Then you found your starting point.</p>
                <button className="button"><span>Discover </span></button>
            </div>
        );
    }
}

export default Headline;