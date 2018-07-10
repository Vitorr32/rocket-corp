import React, { Component } from 'react';
import {connect} from 'react-redux';
import Menu from '../components/Menu/Menu';
import Headline from '../components/Headline/Headline';
import Articles from '../components/Articles/Articles';
import Slideshow from '../components/Slideshow/Slideshow';
import CurrentProject from '../components/CurrentProject/CurrentProject';
import Footer from '../components/Footer/Footer';
import AboutUs from '../components/AboutUs/AboutUs';
import WOW from 'wowjs';
import './App.css';

const mapStateToProps = state =>{
    return {
      route: state.routing.route
    };
}

class App extends Component {

  componentDidMount() {
      new WOW.WOW({
          live: false
      }).init();
  }

  render() {
    if(this.props.route === 'home'){
      return (
        <div>
          <div className="overthefold">
            <Menu/>
            <Headline/>
            <Articles/>
          </div>
          <div className="wow bounceInUp">
            <h1 className="sessionTitle">See our history</h1>  
            <Slideshow/>
          </div>
          <div>          
            <h1 className="sessionTitle wow fadeInLeft">What's coming next</h1>
            <CurrentProject />
          </div>
          <Footer/>
        </div>
      );
    }
    else if (this.props.route === 'about'){
      return(
        <div>
          <Menu/>
          <AboutUs/>
          <Footer/>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(App);
