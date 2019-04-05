import React, { Component } from 'react'
 
export default class Slider extends Component {

  render() {
    
    return (

     <div>

     <div className="slider"></div>

       <div className="slider-content"> <div className="content-desc">

       <h1 style={{color: "white"}}> {this.props.data.title} </h1>
       
       <h2 style={{color: "white"}}> {this.props.data.title2} </h2>
       
       <h4 className='reg' style={{ marginRight: "50px", color: "white" }}>{this.props.data.content}</h4>
       
       <img src="./img/Group%2077.svg"  style={{margin: "0 50px 20px 0"}} width="470px"  height="50px"  alt=""/>
       
       <button id="buttonLook">смотреть</button>
       
    </div>

    <img src="./img/Mask%20Group%2066.png" width="437" height="554" alt=""/>

    </div>

    </div>

    )
  }
}
