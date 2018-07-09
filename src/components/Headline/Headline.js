import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import './headline.css'

class Headline extends Component{
    render(){
        return(
            <div className="headlineholder">
                <p className="headline"><span>Going</span><FontAwesomeIcon icon={faArrowUp}/><span>?</span></p>
            </div>
        );
    }
}

export default Headline;