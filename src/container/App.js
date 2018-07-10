import React, { Component } from 'react';
import {connect} from 'react-redux';
import Menu from '../components/Menu/Menu';
import Headline from '../components/Headline/Headline';
import Articles from '../components/Articles/Articles';
import Slideshow from '../components/Slideshow/Slideshow';
import CurrentProject from '../components/CurrentProject/CurrentProject';
import {contentChange} from '../redux/actions';
import WOW from 'wowjs';
import './App.css';

const mapStateToProps = state =>{
    return {
      browser : state.browser.mediaType
    };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onContentChange : (value) =>dispatch(contentChange(value))
  };
}

class App extends Component {

  componentWillMount(){
    this.props.onContentChange(1);
  } 

  componentDidMount() {
      new WOW.WOW({
          live: false
      }).init();
  }

  render() {
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

      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
