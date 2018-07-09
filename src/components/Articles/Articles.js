import React, { Component } from 'react';

import './article.css'

class Articles extends Component{
    render(){
        return(
            <div className="articleholder">
                <div className="article">
                    <p className="articletext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nibh nunc, vitae convallis sapien sodales quis. Proin fringilla arcu non ipsum euismod, et hendrerit nisl tristique.</p>
                    <a href="article" className="knowmore">Know More >></a>
                </div>
                <div className="article">
                    <p className="articletext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nibh nunc, vitae convallis sapien sodales quis. Proin fringilla arcu non ipsum euismod, et hendrerit nisl tristique.</p>
                    <a href="article" className="knowmore">Know More >></a>   
                </div>
                <div className="article">
                    <p className="articletext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nibh nunc, vitae convallis sapien sodales quis. Proin fringilla arcu non ipsum euismod, et hendrerit nisl tristique.</p>
                    <a href="article" className="knowmore">Know More >></a>
                </div>
                </div>
        );
    }
}

export default Articles;