import React, { Component } from 'react';
import './App.css';
import { ModelPage } from './ModelPage';

class App extends Component {
  constructor(props){
    super(props)
    this.navigate = this.navigate.bind(this);
    this.returnHome = this.returnHome.bind(this);
    this.state = {
      homePage: true
    }
  }
  navigate(){
    this.setState({
      homePage: false
    })
  }
  returnHome(){
    this.setState({
      homePage: true
    })
  }
  render() {
    const screen = (this.state.homePage
      ? (
          <div className="cell medium-8">
            <h2>Models</h2>
            <ul>
              <li><a onClick={this.navigate}>Malfeasance Community Detection</a></li>
              <li><a onClick={this.navigate}>Ghost Preparers</a></li>
              <li><a onClick={this.navigate}>Dependent Claims</a></li>
              <li><a onClick={this.navigate}>PTIN-EIN Matching</a></li>
            </ul>
          </div>
        )
      : (
          <ModelPage return={this.returnHome} />
        )
    )
    return (
      <div className="App">
        <header className="App-header">
          <div className="grid-container" style={{width: "100%"}}>
            <div className="grid-x">
              {screen}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
