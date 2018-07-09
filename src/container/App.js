import React, { Component } from 'react';
import {connect} from 'react-redux';
import Menu from '../components/Menu/Menu';
import Headline from '../components/Headline/Headline';
import Articles from '../components/Articles/Articles';
import './App.css';

const mapStateToProps = state =>{
    return {
      browser : state.browser.mediaType
    };
}

const mapDispatchToProps = (dispatch) =>{
  return {
      
  };
}

class App extends Component {
  render() {
    console.log(this.props.browser);
    return (
      <div>
      <div className="overthefold">
        <Menu/>
        <Headline/>
        <Articles/>

      </div>
      <h1>Yolo</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
