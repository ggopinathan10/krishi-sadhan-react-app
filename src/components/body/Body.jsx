import React, { Component } from 'react';
import Banner from './info-banner/Banner';
import bannerInfo from './info-banner/banner-info.json' 
//import ImageCard from '../content/image-card/ImageCard';
//import logo from '../content/image-card/logo192.png';

class Body extends Component {
   

  render() {
    return (
      <div id="body">
          <Banner
            header={bannerInfo.header}
            subheader={bannerInfo.subheader}
            images={bannerInfo.images}/>
      </div>
    );
  }

}
 
export default Body;