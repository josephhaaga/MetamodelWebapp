import React, { Component } from 'react';
import Gist from 'react-gist';

class ModelPage extends Component {
  constructor(props){
    super(props)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.data = [
      {
        gist: '4ca633e244d5eb5e10246db6b9879e62',
        graph: 'assets/createNodes.jpg'
      }, {
        gist: '40627a247ac785b610f12caa25dabe00',
        graph: 'assets/createEdges.jpg'
      }, {
        gist: '4789af32d8a408524a68473a7997f3fb',
        graph: 'assets/createHyperedges.jpg'
      }]
    this.state = {
      step: 0
    }
  }

  increment(){
    this.setState({
      step: Math.min(this.data.length - 1, this.state.step + 1)
    })
  }
  decrement(){
    this.setState({
      step: Math.max(0, this.state.step - 1)
    })
  }

  render(){

    const gistUrl = this.data[this.state.step]['gist'];
    const graphUrl = this.data[this.state.step]['graph'];
    // const graphUrl = ;
    return (
      <div className="cell medium-12">
        <div className="grid-x">
          <div className="cell medium-12"
           style={{marginBottom: "1rem"}}>
            <a
              onClick={this.props.return}
              style={{color:"lightgray"}}>&larr; Back to model list</a>
          </div>
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
              <Gist id={gistUrl} />
            </div>
          </div>
          <div className="cell medium-6">
            <img
             src={graphUrl}
             style={{width: "100%"}} />
          </div>
        </div>
      </div>
    );
  }
}

export { ModelPage };
