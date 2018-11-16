import React, { Component } from 'react';

class NewStepDialogue extends Component {
  constructor(props){
    super(props)
    this.setActive = this.setActive.bind(this)
    this.data = [
      {
        src: "DF",
        dst: "GF",
        operations: [
          ""
        ],
        disabled: true
      },
      {
        src: "GF",
        dst: "GF",
        operations: [
          "One-hop",
          "Map",
          "Filter"
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
      active: 0
    }
  }
  setActive(idx){
    console.log(idx);
    this.setState({
      active: idx
    })
  }
  render(){
    const activeIdx = this.state.active
    const opsPanels = this.data.map((x, idx) => {
      const status = ((idx === activeIdx && !x.disabled) ? 'is-active' : '');
      const disabled = ((x.disabled) ? 'disabled' : '');
      const panelContent = x.operations.map((y, idx2) => {
        return (
          <li key={idx2}>{y}</li>
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
    const newStep = ((true)
      ? <ul className="accordion" data-accordion>
          {opsPanels}
        </ul>
      : null
    )
    return (
      <div className="new-step">
        {newStep}
      </div>
    )
  }
}

export { NewStepDialogue }
