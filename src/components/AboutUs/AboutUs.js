import React, { Component } from 'react';
import rocketLogo from '../../images/rocketcorp.png'
import desginer from '../../images/designer.jpg'

import './aboutus.css'

class AboutUs extends Component{
    render(){
        return(
            <div className="aboutusholder">
                <div className="rocketholder">
                    <img className="aboutrocket" src={rocketLogo} alt=""></img>
                    <h2 className="title">The Rocket Corporation</h2>
                    <p className="description">   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum sagittis turpis. Fusce sagittis vel neque vel rutrum. Maecenas porttitor tortor vel tellus congue suscipit. Nullam pellentesque interdum molestie. Sed sapien metus, feugiat id ipsum id, porta molestie arcu. Cras sit amet metus est. Maecenas at egestas leo, sed scelerisque tortor. Nulla quis arcu quis felis tristique dignissim vitae vitae odio. Aliquam id ultricies velit. Nulla eget maximus turpis, condimentum gravida mauris. Quisque gravida odio sit amet sapien faucibus, vel aliquet nulla tempus. Nunc dictum eu magna non molestie. Proin eget venenatis sapien.<br/><br/>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum sagittis turpis. Fusce sagittis vel neque vel rutrum. Maecenas porttitor tortor vel tellus congue suscipit. Nullam pellentesque interdum molestie. Sed sapien metus, feugiat id ipsum id, porta molestie arcu. Cras sit amet metus est. Maecenas at egestas leo, sed scelerisque tortor. Nulla quis arcu quis felis tristique dignissim vitae vitae odio. Aliquam id ultricies velit. Nulla eget maximus turpis, condimentum gravida mauris. Quisque gravida odio sit amet sapien faucibus, vel aliquet nulla tempus. Nunc dictum eu magna non molestie. Proin eget venenatis sapien.<br/><br/>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum sagittis turpis. Fusce sagittis vel neque vel rutrum. Maecenas porttitor tortor vel tellus congue suscipit. Nullam pellentesque interdum molestie. Sed sapien metus, feugiat id ipsum id, porta molestie arcu. Cras sit amet metus est. Maecenas at egestas leo, sed scelerisque tortor. Nulla quis arcu quis felis tristique dignissim vitae vitae odio. Aliquam id ultricies velit. Nulla eget maximus turpis, condimentum gravida mauris. Quisque gravida odio sit amet sapien faucibus, vel aliquet nulla tempus. Nunc dictum eu magna non molestie. Proin eget venenatis sapien.
                    </p>
                </div>
                <div className="designerholder">
                    <img className="aboutdesigner" src={desginer} alt=""></img>
                    <h2 className="title">Web Designer</h2>
                    <p className="description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum sagittis turpis. Fusce sagittis vel neque vel rutrum. Maecenas porttitor tortor vel tellus congue suscipit. Nullam pellentesque interdum molestie. Sed sapien metus, feugiat id ipsum id, porta molestie arcu. Cras sit amet metus est. Maecenas at egestas leo, sed scelerisque tortor. Nulla quis arcu quis felis tristique dignissim vitae vitae odio. Aliquam id ultricies velit. Nulla eget maximus turpis, condimentum gravida mauris. Quisque gravida odio sit amet sapien faucibus, vel aliquet nulla tempus. Nunc dictum eu magna non molestie. Proin eget venenatis sapien.<br/><br/>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum sagittis turpis. Fusce sagittis vel neque vel rutrum. Maecenas porttitor tortor vel tellus congue suscipit. Nullam pellentesque interdum molestie. Sed sapien metus, feugiat id ipsum id, porta molestie arcu. Cras sit amet metus est. Maecenas at egestas leo, sed scelerisque tortor. Nulla quis arcu quis felis tristique dignissim vitae vitae odio. Aliquam id ultricies velit. Nulla eget maximus turpis, condimentum gravida mauris. Quisque gravida odio sit amet sapien faucibus, vel aliquet nulla tempus. Nunc dictum eu magna non molestie. Proin eget venenatis sapien.<br/><br/>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum sagittis turpis. Fusce sagittis vel neque vel rutrum. Maecenas porttitor tortor vel tellus congue suscipit. Nullam pellentesque interdum molestie. Sed sapien metus, feugiat id ipsum id, porta molestie arcu. Cras sit amet metus est. Maecenas at egestas leo, sed scelerisque tortor. Nulla quis arcu quis felis tristique dignissim vitae vitae odio. Aliquam id ultricies velit. Nulla eget maximus turpis, condimentum gravida mauris. Quisque gravida odio sit amet sapien faucibus, vel aliquet nulla tempus. Nunc dictum eu magna non molestie. Proin eget venenatis sapien.
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutUs;