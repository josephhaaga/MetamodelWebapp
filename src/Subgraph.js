import React, { Component } from 'react';

class Subgraph extends Component {
  constructor(props){
    super(props)
    this.addFilter = this.addFilter.bind(this)
    this.state = {
      buttonEnabled: false,
      modalEnabled: false
    }
  }

  addFilter(){
    console.log("add Filter");
  }
  render(){
    const buttonStatus = this.state.buttonEnabled
    const modal = this.state.modalEnabled

    const topLevelClause = (
      <div className="grid-x">
        <div className="cell small-4">
          <select onChange={this.props.completed}>
            <option>Vertex</option>
            <option>Person</option>
            <option>Company</option>
          </select>
        </div>
        <div style={{textAlign: "center"}} className="cell small-4">
          <span>as a</span>
        </div>
        <div className="cell small-4">
          <select>
            <option>both</option>
            <option>src</option>
            <option>dest</option>
          </select>
        </div>
        <div className="cell small-12" style={{textAlign: "right"}}>
        <button
         className="button"
         style={{marginTop: "1rem"}}
         onClick={e => this.addFilter}
         >Add filter</button>
        </div>
      </div>
    )

    return (
      <div className="subgraph">
        <li className="accordion-item static" style={{listStyleType: "none"}}>
          <h4 className="accordion-title">Subgraph</h4>
          <div className="accordion-content">
            <div className="inputs">
              <div className="grid-x">
                <div className="cell small-12">
                  <form>
                    {topLevelClause}
                  </form>
                </div>
              </div>
            </div>
            <button
             className={"button success"}
             style={{marginTop: "1rem"}}
             onClick={this.showModal}
             >Add Another Clause</button>
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

export { Subgraph }
