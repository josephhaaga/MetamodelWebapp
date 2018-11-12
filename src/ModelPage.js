import React, { Component } from 'react';
import Gist from 'react-gist';

class ModelPage extends Component {
  constructor(props){
    super(props)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.data = [0, 1, 2] // load JSON file here
    this.state = {
      step: 0
    }
  }

  increment(){
    this.setState({
      step: Math.min(this.data.length, this.state.step + 1)
    })
  }
  decrement(){
    this.setState({
      step: Math.max(0, this.state.step - 1)
    })
  }

  render(){
    return (
      <div className="cell medium-12">
        <div className="grid-x">
          <div className="cell medium-12">
            <div className="grid-x">
              <div className="cell medium-8">
                <div className="button-group">
                  <a className="button left"
                    onClick={this.decrement}>&larr;</a>
                  <a className="button right"
                    onClick={this.increment}>&rarr;</a>
                </div>
              </div>
              <div className="cell medium-4">
                <button class="button fork">Fork this model</button>
              </div>
            </div>
            <h2>Step {this.state.step + 1}</h2>
          </div>
          <div className="cell medium-6">
            <div className="the-code">
              <Gist id='4ca633e244d5eb5e10246db6b9879e62' />
            </div>
          </div>
          <div className="cell medium-6">Diagram goes here</div>
        </div>
      </div>
    );
  }
}

export { ModelPage };
