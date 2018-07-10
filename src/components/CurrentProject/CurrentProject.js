import React, { Component } from 'react';

import './currentproject.css'

class CurrentProject extends Component{
    render(){
        return(
            <div className="projectholder wow fadeInRight">                
                <img className="projectImage" src="https://i.imgur.com/QwDCfkc.jpg" alt=""></img>
                <h2 className="projectTitle">Colonization of Mars</h2>
                <p className="projectContent"> Mars is the focus of much scientific study about possible human colonization. Mars' surface conditions and past presence of water make it arguably the most hospitable planet in the Solar System besides Earth. Mars requires less energy per unit mass (delta-v) to reach from Earth than any planet, except Venus.<br/><br/>
                    Permanent human habitation on other planets, including Mars, is one of science fiction's most prevalent themes. As technology advances, and concerns about humanity's future on Earth increase, arguments favoring space colonization gain momentum. Other reasons for colonizing space include economic interests, long-term scientific research best carried out by humans as opposed to robotic probes, and sheer curiosity.<br/><br/>
                    Both private and public organizations have made commitments to researching the viability of long-term colonization efforts and to taking steps toward a permanent human presence on Mars. Space agencies engaged in research or mission planning include NASA, Roscosmos, and the China National Space Administration. Private organizations include Mars One, SpaceX, Lockheed Martin, and Boeing.
                </p>
            </div>
        );
    }
}

export default CurrentProject;