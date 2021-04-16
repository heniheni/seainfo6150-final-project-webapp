import React, { Component } from "react";
import styles from "./ImageSlider.module.css";

class ImagesSlide extends Component{
    constructor() {
        super();
        this.onClickNextButton = this.onClickNextButton.bind(this);
        this.onClickPreviousButton = this.onClickPreviousButton.bind(this);
        
        const image1 = require("../images/scone.PNG");
        const image2 = require("../images/sctwo.PNG");
        const image3 = require("../images/scthree.PNG");
    
        this.state = {
          index: 0,
          imageList: [image1, image2, image3],
        };
      }
    
      onClickNextButton()  {
         console.log("Forward")
        if (this.state.index + 1 === this.state.imageList.length) {
          this.setState({
            index: 0,
          });
        } else {
          this.setState({
            index: this.state.index + 1,
          });
        }
      }
    
      onClickPreviousButton() {
        console.log("backward")
        if (this.state.index - 1 === -1) {
          this.setState({
            index: this.state.imageList.length - 1,
          });
        } else {
          this.setState({
            index: this.state.index - 1,
          });
        }
      }
    
      render() {
        return (
          <div>
            <img className={styles.ImageSlider} src={this.state.imageList[this.state.index]} alt="" /> <br />
            <div className={styles.directionalButtons}>
            <button className={styles.forwardButton} onClick={this.onClickNextButton}>Next</button>
            <button className={styles.previousButton} onClick={this.onClickPreviousButton}>Previous</button>
            </div>
            
          </div>
        );
      }
}

export default ImagesSlide;