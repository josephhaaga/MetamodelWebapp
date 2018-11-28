import React, { Component } from 'react';

class Subgraph extends Component {
  constructor(props){
    super(props)
    this.addFilter = this.addFilter.bind(this)
    this.changedVal = this.changedVal.bind(this)
    this.state = {
      buttonEnabled: false,
      modalEnabled: false,
      filtersApplied: false
    }
  }

  changedVal(){
    this.props.completed()
    this.setState({
      filtersApplied: true
    })
  }

  addFilter(){
    console.log("add Filter");
  }
  render(){
    const buttonStatus = this.state.buttonEnabled
    const modal = this.state.modalEnabled
    const filters = ((this.state.filtersApplied)
      ?
        <div className="grid-x">
          <div className="cell small-12">
            <p style={{color: "white"}}>where</p>
          </div>
          <div className="cell small-11 small-offset-1">
            <div className="grid-x">
              <div className="cell small-4">
                <select className="attribute">
                  <option value="" disabled>Attr</option>
                  <option>Name</option>
                  <option selected>Age</option>
                  <option>Status</option>
                  <option>Address</option>
                </select>
              </div>
              <div style={{textAlign: "center"}} className="cell small-4">
                <select className="logic" style={{paddingRight: "0"}}>
                  <option value="" disabled>comparison</option>
                  <option>equals</option>
                  <option>less than</option>
                  <option selected>greater than</option>
                  <option>within</option>
                </select>
              </div>
              <div className="cell small-4">
                <input style={{background: "#bb7149", color: "white"}} type="text" placeholder="30"/>
              </div>
            </div>
          </div>
          <div className="cell small-11 small-offset-1">
            <div className="grid-x">
              <div className="cell small-4">
                <select className="attribute">
                  <option value="" disabled>Attr</option>
                  <option>Name</option>
                  <option>Age</option>
                  <option>Status</option>
                  <option selected>Address</option>
                </select>
              </div>
              <div style={{textAlign: "center"}} className="cell small-4">
                <select className="logic" style={{paddingRight: "0"}}>
                  <option value="" disabled>comparison</option>
                  <option>equals</option>
                  <option disabled>less than</option>
                  <option disabled>greater than</option>
                  <option selected>within</option>
                </select>
              </div>
              <div className="cell small-4">
                <select style={{paddingRight: "0", background: "#00d170"}}>
                  <option value="" disabled>Geo</option>
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option selected>Maryland</option>
                </select>
              </div>
            </div>
          </div>

          <div className="cell small-11 small-offset-1">
            <div className="grid-x">
              <div className="cell small-4">
                <select className="attribute">
                  <option value="" disabled>Attr</option>
                  <option>Name</option>
                  <option>Age</option>
                  <option selected>Status</option>
                  <option>Address</option>
                </select>
              </div>
              <div style={{textAlign: "center"}} className="cell small-4">
                <select className="logic" style={{paddingRight: "0"}}>
                  <option value="" disabled>comparison</option>
                  <option selected>equals</option>
                  <option disabled>less than</option>
                  <option disabled>greater than</option>
                  <option disabled>within</option>
                </select>
              </div>
              <div className="cell small-4">
                <select style={{paddingRight: "0", background: "#fbf059", color: "#8c8c8c"}}>
                  <option value="" disabled>Status</option>
                  <option selected>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                </select>
              </div>
            </div>
          </div>

        </div>
      : null
    )
    const topLevelClause = (
      <div className="grid-x">
        <div className="cell small-4">
          <select onChange={this.changedVal}>
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
                  <form>
                    {filters}
                  </form>
                  <div className="cell small-12" style={{textAlign: "right"}}>
                    <button
                     className="button"
                     style={{marginTop: "1rem"}}
                     onClick={e => this.addFilter}
                     >Add filter</button>
                  </div>
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
