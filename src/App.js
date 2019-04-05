import React, { Component } from 'react';
import NavBar from './modules/NavBar.jsx'
import Slider from './modules/Slider.jsx'
import './index.css'
import DB from './dataBaceSumulation.json'

class App extends Component {
state = { 
  name: '',
  team: true
}
 
  updateData = (value) => { 
    this.setState({name: value})
  }

  updateTeam = (value) => { 
    this.setState({ team: value })
    console.log(this.state.team)
  }

  render() {
    return (
      <div className="App">
       <NavBar updateTeam={this.updateTeam} updateData={this.updateData}/>
       <Slider team={this.state.team} data={DB.post2}/>
      </div>
    );
  }
}

export default App;
