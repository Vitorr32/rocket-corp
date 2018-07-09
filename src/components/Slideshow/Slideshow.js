import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {contentChange} from '../../redux/actions';

import './slideshow.css';

const mapStateToProps = state =>{
    return {
        isLoading : state.slideshow.isLoading,
        centerSlide : state.slideshow.centerSlide,
        slideshowcontent : state.slideshow.slideshowcontent,
    };
}

const mapDispatchToProps = (dispatch) =>{
  return {
      onContentChange : (value) =>dispatch(contentChange(value)),
  };
}

class Slideshow extends Component{

    renderingSlideshows(){
        //This should migrate to the back end when it is made, too ugly here
        const {slideshowcontent,isLoading,centerSlide} = this.props;
        
        if(isLoading) return;
        const first, middle = slideshowcontent[centerSlide], last;
        
        //The center slide is the last slide
        if(centerSlide + 1> slideshowcontent.lenght){
            first = slideshowcontent[centerSlide - 1],
            last = slideshowcontent[0]
        }
    }


    render(){
        return (
            <div>
                <span><FontAwesomeIcon icon={faArrowLeft}/></span>
                {/*this.renderingSlideshows()*/}
                <span><FontAwesomeIcon icon={faArrowRight}/></span>
            </div>
        
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Slideshow);