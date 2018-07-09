import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Headline from '../Headline/Headline';
import './abovethefold.css'


class AboveTheFold extends Component{
    render(){
        return(
            <div className="foldholder">
            
            <Headline/>
                <Menu/>
            </div>
        );
    }
}

export default AboveTheFold;