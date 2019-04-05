import React, { Component } from 'react'

 
export default class NavBar extends Component {

  state = { 
      searchTop: "-100px",  
      serchIsOpen: false,
      searchInputValeu: '',
      team: false
  }  
 
  imageClick = () => {
    if (this.state.serchIsOpen == false) {
     this.setState({searchTop: "0px", serchIsOpen: true})
    } else
    {
      this.setState({searchTop: "-100px", serchIsOpen: false})
    }
  }  
  handleChange(event) {
    let value = event.target.value
    this.setState({ searchInputValeu: value })
    
  }
  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
   
     this.props.updateData( this.state.searchInputValeu)
    }
}

chengeTeam = (e) => { 
  this.setState({team: e.target.checked})
  this.props.updateTeam(this.state.team)
}

  render() {
    
    return (
        <div className="menu">
        <nav>
        <div className="search" style={{top: this.state.searchTop}}>
            <img src="./img/baseline-search-24px.svg" style={{width: "55px", margin: "0px 0px 0px 330px"}} alt=""></img>
            <input className='search-bar' placeholder='Что будем смотреть сегодня?'  onChange={ this.handleChange.bind(this) } value={this.searchInputValeu} onKeyPress={this.handleKeyPress} type="text"></input>
            <img src="./img/Group 115.svg" style={{ width: "55px", margin:"0 45px 0 0", cursor: "pointer" }} alt=""></img>
            <img src="./img/baseline-close-24px (5).svg" style={{width: "55px" ,cursor: "pointer"}}  onClick={ () => { this.imageClick() }} alt=""></img>     
</div>  
   <img className="logo" src="./img/logo.svg" alt="" width="39px" hight="39px"></img>
        <li>Главная</li>
        <li>новости</li>
        <li>фильмы</li>
        <li>статьи</li>
        <li>сериалы</li>
        <img style={{margin: "11px 0 0 19px"}} src="./img/baseline-person-24px.svg" width="39" alt=""></img>
        <img src="./img/baseline-search-24px.svg" style={{width: "39px", margin: "11px 0 0 49px", cursor: "pointer"
         }} alt="" onClick={ () => { this.imageClick() } } id = "search"></img>
        <img src="./img/DARK_SIDE-icon.svg" style={{
        width: "39px",
        margin: "11px 0 0 59px"
        }} alt=""></img>
         <div className="button r" id="button-1">
            <input type="checkbox"  className="checkbox" checked={this.state.team} onChange={ this.chengeTeam.bind(this) } ></input>
            <div className="knobs"></div>
            <div className="layer"></div>
            </div> 
            <img src="./img/WHITE_SIDE-icon.svg" 
            style={{
            width: "39px",
            margin: "11px 0 0 12px"
            }}
        width="60xp" alt=""></img>
        </nav>
        </div>
    )
  }
}

