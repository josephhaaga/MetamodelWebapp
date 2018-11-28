import React, { Component } from 'react';
import { OneHop } from './OneHop';
import { Subgraph } from './Subgraph';

class NewStepDialogue extends Component {
  constructor(props){
    super(props)
    this.setActive = this.setActive.bind(this)
    this.doOperation = this.doOperation.bind(this)
    this.data = [
      {
        src: "DF",
        dst: "GF",
        operations: [],
        disabled: true
      },
      {
        src: "GF",
        dst: "GF",
        operations: [
          "One-hop",
          "Map",
          "Filter",
          "Subgraph"
        ],
        disabled: false
      },
      {
        src: "GF",
        dst: "DF",
        operations: [
          "Summary statistics",
          "Triangle count"
        ],
        disabled: false
      },
    ]
    this.state = {
      active: 0,
      step: this.props.step,
      newOperationSelected: false
    }
  }
  doOperation(a){
    let newOp = "OneHop"
    if(a.target.innerText === "Subgraph"){
      newOp = "Subgraph"
    }
    console.log(newOp);
    this.setState({
      newOperationSelected: newOp
    })
  }
  setActive(idx){
    this.setState({
      active: idx
    })
  }
  componentWillReceiveProps(props) {
    const { step, fn1, fn2 } = this.props;
    if (props.step !== step) {
      this.setState({newOperationSelected: false})
    }
  }
  render(){
    const doOperation = this.doOperation;
    const activeIdx = this.state.active
    const opsPanels = this.data.map((x, idx) => {
      const status = ((idx === activeIdx && !x.disabled) ? 'is-active' : '');
      const disabled = ((x.disabled) ? 'disabled' : '');
      const panelContent = x.operations.map((y, idx2) => {
        return (
          <li key={idx2}><a href="#" key={idx2} onClick={idx2 => doOperation(idx2)}>{y}</a></li>
        )
      })
      const theIndex = idx;
      const callbackFn = this.setActive
      return (
        <li key={idx} className={"accordion-item "+status+" "+disabled} data-accordion-item>
          <a onClick={() => callbackFn(theIndex)} href="#" className="accordion-title">{x.src} &rarr; {x.dst}</a>
          <div className="accordion-content" data-tab-content>
            <ul className="set-of-ops">
              {panelContent}
            </ul>
          </div>
        </li>
      )
    })

    const operation = ((this.state.newOperationSelected === 'Subgraph')
      ? <Subgraph name="Subgraph" completed={this.props.completedSubgraph} />
      : <OneHop name="One-Hop" completed={this.props.completedOnehop}/>
    )

    const newStep = ((this.state.newOperationSelected)
      ? <div className="the-operation">
          {operation}
        </div>
      : <ul className="accordion" data-accordion>
          {opsPanels}
        </ul>
    )
    return (
      <div className="new-step">
        {newStep}
      </div>
    )
  }
}

export { NewStepDialogue }
