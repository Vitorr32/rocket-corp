import React, { Component } from 'react';

import facebook from '../../images/social-1_logo-facebook.svg';
import twitter from '../../images/social-1_logo-twitter.svg';
import instagram from '../../images/social-1_logo-instagram.svg';
import youtube from '../../images/social-1_logo-youtube.svg';
import linkedin from '../../images/social-1_logo-linkedin.svg';

import './footer.css'

class Footer extends Component{

    callForAction(){
        //TODO: Call for action to register user to newspaper
    }
    render(){
        return(
            <footer className="footerholder wow bounceInUp">
                <div className="socialmediaholder">
                    <a href="facebook"><img className="externallink" src={facebook} alt=""/></a>
                    <a href="twitter"><img className="externallink" src={twitter} alt=""/></a>
                    <a href="instagram"><img className="externallink" src={instagram} alt=""/></a>
                    <a href="youtube"><img className="externallink" src={youtube} alt=""/></a>
                    <a href="linkedin"><img className="externallink" src={linkedin} alt=""/></a>
                </div>            
                <div className="subscribeholder">
                    <input className="subscribe" type="email" placeholder="Subscribe to our newsteller" />
                    <input className="subscribebutton" type="button" onClick={this.callForAction()} value="Subscribe"/> 
                </div>
                <p className="copyright">© Copyright 2018 Rocket Corporation, All rigths reserved</p>
            </footer>
        );
    }
}

export default Footer;