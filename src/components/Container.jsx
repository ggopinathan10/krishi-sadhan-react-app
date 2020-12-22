import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Body from './body/Body';

class Container extends Component {
    state = {  }
    render() { 
        return (
          <div id="container">
            <Header />
            <Body />
            <Footer />
          </div>
        );
    }
}
 
export default Container;