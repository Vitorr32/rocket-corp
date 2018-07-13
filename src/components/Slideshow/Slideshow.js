import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {contentChange} from '../../redux/actions';
import {Animated} from "react-animated-css";

import './slideshow.css';

const mapStateToProps = state =>{
    return {
        centerSlide: state.slideshow.centerSlide,
        isLoading : state.slideshow.isLoading,
        slideshowcontent : state.slideshow.slideshowcontent,
        browser : state.browser,
    };
}

const mapDispatchToProps = (dispatch) =>{
  return {
      onContentChange : (value) =>dispatch(contentChange(value)),
  };
}

class Slideshow extends Component{

    componentWillMount(){
        this.props.onContentChange(1);
    } 

    renderingSlideshows(){
        const {slideshowcontent,browser} = this.props;

        const toRender = slideshowcontent.map( (slide,iter) =>{
            return(
                <Animated key={`slide${iter}`} className="slide" animationIn="flipInY" isVisible={true}>
                    <img className="slideImg" src={slide.image} alt=""/>
                    <h1 className="slideTitle">{slide.title}</h1>
                    <hr/>
                    <p className="slideContent">{slide.content}</p>
                </Animated>
            );
        });        
        if(browser.lessThan.large){
            toRender.pop();
        }
        if(browser.lessThan.medium){
            toRender.shift();
        }
        return toRender;
    }

    nextSlide(){
        return this.props.onContentChange(this.props.centerSlide + 1);
    }

    previousSlide(){
        return this.props.onContentChange(this.props.centerSlide - 1);
    }
    
    render(){
        
        return this.props.isLoading || Object.keys(this.props.slideshowcontent).length === 0
        ?   <div className="slidesHolder">
                <a className="arrow left"><FontAwesomeIcon icon={faArrowLeft}/></a>
                <a className="arrow rigth"><FontAwesomeIcon icon={faArrowRight}/></a>
            </div>
        :   <div className="slidesHolder">
                <a onClick={() => this.nextSlide()} className="arrow left"><FontAwesomeIcon icon={faArrowLeft}/></a>
                {this.renderingSlideshows()}
                <a onClick={() => this.previousSlide()} className="arrow rigth"><FontAwesomeIcon icon={faArrowRight}/></a>
             </div>
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Slideshow);