/* eslint-disable */

import React, {Component} from 'react';
import "./Banner.css";

const Banner = (props) => {

    function renderImages(){
        const images = props.images.map(img => {
            <img src={img}/>
        })
        console.log(images);
        return images;
    };
    

        return(
            <div className="banner-wrapper">
                <div className="banner-img">
                {renderImages()}  
                    <header>
                        <h1>{props.header}</h1>
                        <p>{props.subheader}</p>
                    </header>
                </div>
            </div>
        );

}

export default Banner;