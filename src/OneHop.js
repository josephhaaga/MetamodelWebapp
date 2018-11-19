import React, { Component } from 'react';

class OneHop extends Component {
  constructor(props){
    super(props)
    this.data = {
      motif: "(a)-[r1]->(b); (c)-[r2]->(b); (a) != (c)",
      transform: "(a)-[r3]->(c)",
      parameterTypes: {
        vertex: ["Vertex", "Person", "Company"],
        edge: ["Edge", "claims_dependent", "owned_by", "employed_by"]
      }
    }
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
        <input type="text" />
      </div>
    )
    return (
      <div className="one-hop">
        <li className="accordion-item static" style={{listStyleType: "none"}}>
          <h4 className="accordion-title">One Hop</h4>
          <div className="accordion-content">
            <img src="assets/OneHop.jpg" />
            <div className="inputs">
              <form className="nodeA">
                {nodeA}
              </form>
              <form className="nodeB">
                {nodeB}
              </form>
              <form className="nodeC">
                {nodeC}
              </form>
              <form className="edgeR1">
                {edgeR1}
              </form>
              <form className="edgeR2">
                {edgeR2}
              </form>
              <form className="edgeR3">
                {edgeR3}
              </form>
            </div>
          </div>
        </li>
      </div>
    )
  }
}

export { OneHop }
