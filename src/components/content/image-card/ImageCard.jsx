import React, {Component} from 'react';

class ImageCard extends Component {


    render(){
        return(
            <div>
                <img src={this.props.imgUrl}/>
                <h1>{this.props.header}</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }

}

export default ImageCard;