import React, { Component } from 'react';
import Gist from 'react-gist';

class OneHop extends Component {
  constructor(props){
    super(props)
    this.enableButton = this.enableButton.bind(this)
    this.showModal = this.showModal.bind(this)
    this.data = {
      motif: "(a)-[r1]->(b); (c)-[r2]->(b); (a) != (c)",
      transform: "(a)-[r3]->(c)",
      parameterTypes: {
        vertex: ["Vertex", "Person", "Company"],
        edge: ["Edge", "claims_dependent", "owned_by", "employed_by"]
      }
    }
    this.state = {
      buttonEnabled: false,
      modalEnabled: false
    }
  }

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    ctx.beginPath();
    ctx.strokeStyle = "#2bc259";
    ctx.moveTo(10,25);
    ctx.lineTo(150,175);
    ctx.lineTo(290,25);
    ctx.lineTo(10,25);
    ctx.stroke();
    ctx.globalCompositeOperation='destination-over';
  }

  enableButton(){
    this.props.completed();
    this.setState({buttonEnabled: true})
  }
  showModal(){
    this.setState({modalEnabled: true})
  }
  render(){
    const vertexOptions = this.data.parameterTypes.vertex.map(x =>
      <option value={x}>{x}</option>
    )
    const edgeOptions = this.data.parameterTypes.edge.map(x =>
      <option value={x}>{x}</option>
    )
    const nodeA = (
      <div className="node a">
        <select name="a">
          {vertexOptions}
        </select>
      </div>
    )
    const nodeB = (
      <div className="node b">
        <select name="b">
          {vertexOptions}
        </select>
      </div>
    )
    const nodeC = (
      <div className="node c">
        <select name="c">
          {vertexOptions}
        </select>
      </div>
    )
    const edgeR1 = (
      <div className="edge r1">
        <select name="r1">
          {edgeOptions}
        </select>
      </div>
    )
    const edgeR2 = (
      <div className="edge r2">
        <select name="r2">
          {edgeOptions}
        </select>
      </div>
    )
    const edgeR3 = (
      <div>
        <input type="text" onBlur={this.enableButton}/>
      </div>
    )
    const buttonStatus = ((this.state.buttonEnabled) ? '' : 'disabled')
    const modal = ((this.state.modalEnabled)
      ? <div className="result-code"><Gist id={'9965f3190b83fa10ae1a3ca5af654cdc'} /></div>
      : null
    )
    return (
      <div className="one-hop">
        <li className="accordion-item static" style={{listStyleType: "none"}}>
          <h4 className="accordion-title">One Hop</h4>
          <div className="accordion-content">
            <div className="inputs">
              <canvas ref="canvas" width={300} height={200} style={{maxWidth: "100%"}}/>
              <div className="grid-x" style={{position: "absolute", top: "0px"}}>
                <div className="cell medium-3">
                  <form className="nodeA">
                    {nodeA}
                  </form>
                </div>
                <div className="cell medium-3 medium-offset-1">
                  <form className="edgeR3">
                    {edgeR3}
                  </form>
                </div>
                <div className="cell medium-3 medium-offset-1">
                  <form className="nodeC">
                    {nodeC}
                  </form>
                </div>

                <br/><br/>

                <div className="cell medium-3 medium-offset-1">
                  <form className="edgeR1">
                    {edgeR1}
                  </form>
                </div>
                <div className="cell medium-3 medium-offset-3">
                  <form className="edgeR2">
                    {edgeR2}
                  </form>
                </div>

                <br/><br/>

                <div className="cell medium-3 medium-offset-4">
                  <form className="nodeB">
                    {nodeB}
                  </form>
                </div>

              </div>
            </div>
            <button
             className={"button "+buttonStatus}
             style={{marginTop: "1rem"}}
             onClick={this.showModal}
             >Generate Code</button>
          </div>
        </li>
        {modal}
      </div>
    )
  }
}

export { OneHop }
