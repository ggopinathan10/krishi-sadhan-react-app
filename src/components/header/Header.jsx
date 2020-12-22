import React, { Component } from 'react';
import NavBar from './nav-bar/NavBar';

class Header extends Component {
    state = {  }
    render() { 
        return ( <div id="header">
            <NavBar/>

        </div> );
    }
}
 
export default Header;