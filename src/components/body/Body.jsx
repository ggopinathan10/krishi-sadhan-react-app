import React, { Component } from 'react';
import ImageCard from '../content/image-card/ImageCard';
import logo from '../content/image-card/logo192.png';

class Body extends Component {
  constructor(){
    super();
    this.state = {
      name : "Bot"
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  styles = {
    button :  {
      fontSize : "20px",
      color :"red"
    },
    paraStyles : {
      color : "black",
      maxWidth : "200px",
      fontSize : "15px" 
    },
    headerStyles : {
      fontSize : "20px",
      fontWeight : "bold",
      coloe : "red"
    }
  };

  
  handleBtnClick() {
    this.setState(previousState => {
      return {
        name : document.getElementById('ip1').value
      }
    });
  }
  

  render() {
    return (
      <div id="body">
        <input id="ip1" placeholder="Enter your name here"></input>
        <button style={this.styles.button} onClick={this.handleBtnClick}>Submit Name</button>
        <span>{this.state.name}</span>
        <h1 style={this.styles.headerStyles}>First react app</h1>
        <p style={this.styles.paraStyles}>Hello my name is gokul and this is my first React app. I want to become a pro in React</p>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <ImageCard
            header="first"
            description="this is first image"
            imgUrl={logo}/>
          <ImageCard
            header="second"
            description="this is second image"
            imgUrl={logo}/>
          <ImageCard
            header="third"
            description="this is third image"
            imgUrl={logo}  />
          <ul>
            <li>red</li>
            <li>green</li>
            <li>yellow</li>
          </ul>
        </div>
      </div>

      
    );
  }

  displayName(){
    return this.state.name;
  }
}
 
export default Body;