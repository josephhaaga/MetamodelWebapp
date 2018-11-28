import React, { Component } from 'react';
import Gist from 'react-gist';
import { NewStepDialogue } from './NewStepDialogue.js';
import blank from './assets/blankSlate.jpg';
import createOneHop from './assets/subGraphOneHop.jpg';
import subGraph from './assets/subGraph.jpg';
import { RIEInput } from 'riek';
import _ from 'lodash';

class ModelPage extends Component {
  constructor(props){
    super(props)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.forkModel = this.forkModel.bind(this)
    this.addStep = this.addStep.bind(this)
    this.updateTitle = this.updateTitle.bind(this)
    this.generateSubgraphResult = this.generateSubgraphResult.bind(this)
    this.generateOneHopResult = this.generateOneHopResult.bind(this)
    this.state = {
      comments: [],
      data: [
      {
        title: "Create Nodes",
        gist: '4ca633e244d5eb5e10246db6b9879e62',
        oldGraph: blank,
        newGraph: 'assets/createNodes.jpg',
        branch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhgAAABqCAYAAAD+8SjzAAAFGklEQVR42u3dO28cVRQA4C2QHHsLGkpEIkRNUiFROSUdokwVREvhghpthVbawou9fiiywAKUCFnhEcLukgIlDRJF5MeG3vyD5R8sc5BiOSaZfc2M7Znvk46U2J478Yn3zPG9d2dqNQAAAAAAAAAAAAAAAAAAAAAAAAAAAACgTJ7u1V4/6i6sDPpLu4Ne/fHL4ln/SuOoV78tWwBAqkF36cNoHv56VB9NE4PfFn+KY2UQADix361dnaWx+F+jkYyx/7B+XUahOO12++b6+np7Y2PjcafTOd7e3h5FJH8/iI/F51qt1g2ZAgoVSyHzNhZnI8ZU9BV9+ctXkoOPT+dmXMTXrq2tWdYE8hd7LLJuLk5mM5KxFX1FX/6yF41VNFqT5uhsxLHNZvOanzYgn5mLXv12Xs3FyUxGhTaBKvryV9TMTvK9DmfN06l8DWMslRC4dM1FlZoMRV/+isrTvDk6G5oMIDOxCTO56A/HNQaH/TdGv99fHu198+no3u5nL8SDu7dGT358b9IGY1jmjZ+KvvwVOMMzzDpXMablEiATk7xbJJqHnTurY4vT1ztfTNRoxDnLmEtFX/6KknxPh1nn6fTyksoIzGWSpZEfvvtk6gIVx1RxqUTRl78ixMbXvPL0POIcKiQwR4OxeJzWBMSSyKwFKo5NbzAWj8uUS0Vf/gpsxP7OO1fxbhwVEphJ3GkzrQH44+d35y5SMUbqUkmJ7vap6MtfEfLO0enY2toaFXm+rEOVh/NqMPr1dtqGzthPMe8LPMaIsV51nkd7H1zqAnYecdmLvvwJDQaUvsFYOijiwh9jveo8f/7yjkIoxAVtkMxgADNJW7qIt55m9SKPsdLOpej7DVz+5EqDARVpMLJ+oWswFH35ExoM0GBoMIQQGgxAgyGEPRhCgwGXoMH49qvPM3uRx1iWSIT8WU7SYEBFpN0ifJa7d85yV88s7rWh6MufZkZoMOAiNRj9pd087uA5zR09szyPEEIzpsGAC2Dcc0iyutFW1s85UfT9Bl71i2YRdz2Nc6iSwEz2u7Wr456gOm+RGvdk1fg3lCWfRRT9Mv88umhOznNbgIu/TDLmUe0P7t6auUDFsVV6ZHsRRf/91XvLZf1ZdNGcuiHL88mzh6ojMF+DMeaBZxG97z+aukDFMePGLdODzooo+p1O56jWuP92yWcxXDQn1Gq1bmxubv6TdZ5izGazeU11BHKfxXi+GXPnzupEey7GPaa9jLMXRRT9RqPxVtl/Fl00p9Nut29mnav4P1AVgUzsP6xfH9cQRDz99c3/lj1e1mhEYxEPNUt7cuoLey+Sc5Y1n4q+/BWdryyashgjxlIRgUwddRdWJmkMsog4VxUukoq+/BU58zPP8lIca1kEyE3afTGyijhHVfKp6Mtf0WIT6zTvxomv9W4RoBDP+lcaeTUXMXYVc6roy995NGedTufLJJ6cbtLiz/Gx+Jy9FkDh4gZcSQwzXRZJxqx6XhV9+QOovLgB1qC/dJDBkshBmTd0AgCzzGZ0F1aOeovH089YLB6btQAAUsVNsWKDZlqzEbMVg369Pei9tixjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUzr+QUGKRFg0ZlwAAAABJRU5ErkJggg=="
      }, {
        title: "Create Edges",
        gist: '40627a247ac785b610f12caa25dabe00',
        oldGraph: 'assets/createNodes.jpg',
        newGraph: 'assets/createEdges.jpg',
        branch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhgAAABqCAYAAAD+8SjzAAAE7ElEQVR42u3dO28cVRQA4C2QnPUWaSiRkoKapKJNSjpEmcqIlsIFNUqFVtoii9+KLLAABSGLV0h2lxQoaSJRRH5s6Jd/sPyDZQ7ClmOSmX3Mmuyd75OulNiZe62To+sz996dqdUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjxbL92+biztNrvLe/1u43HL2vPe5duH3cbK6IFAOTqd5bfj+Lhj0eN0SSt/2v9p7hWBAGAUwed2pVpCov/FBpZHwcPGtdEFIBktdvtm+vr6+3Nzc3HGxsbg52dnVG07O+H8bX4XqvVul71OMVWyKyFxfkWfco/+SdOQFKyCenDsxNVUYt/u7a2VsmzBHHGouzi4nQ1I+tb/sk/cQIWXtzlxF3PuBPW+RbXNpvNq5VZueg2VuZVXJyuZFToEKj8EycgQbHMmk08w2knrTOT1zD6UlwoMuSfOAGKi5uzTljnW8qTVxzCzH7pD4sKg6Pem6Pfvr8x2v/q49G3e5+80O7fuzV68uO74xYYw5QPfso/cQIS9O9y67DsiSv6THUZdpxPi0TxsHv3TmGcvtz9bKxCI8aUf9XNP3ECFk42wRyVPWmd3etNLV7jbI388M1HE8cqrqniVon8EycgQXEKfV6T1kmLMdIqMOqDvCIgtkSmjVVcm19g1Afyr3r5J07AIt4V/TnviSs+GpdKvOJJm3kFwNOf35k5XtFH7lZJQk/7lH/iBCRoHgfGXtW2t7dHFzXWPNuj/fdyD3TGeYpZx4g+oq9XjRM/QwqxvMiWSv6JU34zq8NrIrtj+dykOln7/Ze3L+QXf14hEz+D/wtNU2DA61xgPHFnNFnL27qIj56WNU70lTeWu+Xq5J84KTDAvm7FC4xFHssvTnFSYAClsaSqwNA0WySAAkOBocDQNAUG2CKpWoHx9RefljZO9GWLRBMnBQYsJIc8y31GxTRP75zmqZ5lPGvD2QJxcgYDmGeB4WOqJT5pc5YneP5f42iaFQygdB60Ve7KQrSyHrRV9ntObDPYZrCCASR3DiPGSCVeB53alaI3qM4ar6I3q8bPIP+qlX/iBCwcL1GaXNGr2u/fuzV1rOLaKr2yXf6JE5D2KsY8XwN9lFq8il54Fq373QcTxyquKeo3pRedyT9xAhLXarWub21t/VX2pBV9NpvNqynGrGgV4+Qw5u7dO2OduSh6TXuKqxfyT5yACpjHgc+YEFON18GDxrWigiDas4dv/bPt8bJCIwqLeKlZ3ptTXzh7kY0p/6qdf+IELOzkVcYdUvQRfaUer+PO0uo4hUEZLcaSf/JPnICFFXczs+z1xrVVWm7t95b35l1cxBjyT/6JE5CEOFE+yUfj4t9W9RT6896l2/MqLqJv+Sf/xAlI8k4pnvgZjxU/e8cUf46vxffs4dZqx93GStaGpW6LZH3KP/knTgAVFw/A6veWD0vYEjlM+UAnADDNakZnafW4Wx9MvmJRH1i1AAByxUOx4oBmXrERqxX9XqPd775xQ8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbQ33W39IAsUlOKAAAAAElFTkSuQmCC"
      }, {
        title: "Create Hyperedges",
        gist: '4789af32d8a408524a68473a7997f3fb',
        oldGraph: 'assets/createEdges.jpg',
        newGraph: 'assets/createHyperedges.jpg',
        branch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhgAAABqCAYAAAD+8SjzAAAFLklEQVR42u3dPW9bVRgAYA9IaeKBhRHRCjHTTkhMYWRDjJ2CWBkyMCNPyJKHhCR2oiqCCFArFJWPUmzTAbULEkOVxC57+AfuPzB+ES1uSK+/rj/u9fNIR2qT3HOTV+cev/ecc88tFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB2Pjwuvtuorm+3m2lG7UXx4WXnSvFJqNYobogUAJGrX1z6I5OHPB8XuKKX96+qPcawIAgDPndQLV8dJLP6XaPTqOLlfvC6iAAtse3v7vd3d3e1qtfpwb2/v/ODgoBul9//T+Fp8r1Kp3BAp8ZtETIVMmlhcLFGndqadAQum1yF91N9RDSrxszs7O+bCxW9kscYi7eTi+WhGr27tTDsDFkDc5cRdz7Ad1sUSx5bL5WviJ35DjVw0ihvTSi6ej2TkcBGodgZkSgyz9jqezridVl/n1Ym6xE/85p1c5DHJ0M6AzHVak3ZYF8sydV7iN5pYhNn70O8MSgzOmq91f7u73j3++pPunaNPXyj3bt/sPvrhnWETjE4eFn5qZ0Cm/Dvc2km744o6l2EYVvxGN8zTIpE8HN7aGhinrw4/HyrRiHNqZ8t7nQJz0OtgztLutPrnesVP/PoNMzXy/bcfjxyrOCbPUyXaGZApsQp9Wp3WsxLnED/x+y/BWD1PSgJiSmTcWMWxyQnG6rl2tnzXKTCfu6K/pt1xxaNx4id+IXbaTEoAfv/p7YnjFXUkTpVkcLdP7QzIlGksGHtZ2d/f787qXHkseYnfg+P3Exd0xnqKSc8RdURdLztP/A5ZilmtVtPOJix6e5ix3h3LFz68lVmWP35+ayYf/EmJTPwOEozlKnp7mH2C8cidUTb+przEL2nqIh49Tes8UVfSubIUs2q1qp1N+Dfp7SGH87oSDPEbNsHI8rkkGBIMoI+hU0WCoZgiASQYigRDgqFIMMAUiSc7lFE+9L/58rPUzhN1mSJRTJHAnFjkaQ3GrEvSHhXj7N45zq6eaey1YQ2GBANITjA8pqrMtCTttDnJDp7zOo/HVE2RAJew0ZbRklmXQe8LSWujrbTfc2KjLQkGsIDrMOIc4qdzDCf1wtVBb1CdNF6D3qwav4N2tlzXKTAHXqK0+PF7d+vOep5iNuhV7fdu3xw7VnFsHl/Z7joFsnoXPs3XQJ+J30QvoGoVSnffzFWCMeCFZ1Ea3304cqzimEH1ZvFFZ65TILMqlcqNWq32dApzx0/L5fI18Rs/fqVS6Y08xmzQKMazxZiHt7aGWnMx6DXtWR69cJ0CmTaNBZ/RIYqf+F3m5H7x+qCEIMrjX17/Z9rjskQjEot4qVnSm1NfWHvRO6d2ttzXKTDHziuNO6SoI+oSP/FL0qqvbA6TGKRR4lzamesUmKO4m5lkrjeOXebhVvEbTbu5djTt5CLOoZ25ToEFESvKR3k0Ln7WKnTxG8eT5pXStJKLqFs7086ABb1Tih0/Y1vx/jum+Hd8Lb5nDlf8JtVqFDd6pZPqtEivTu1MOwNgycUGWO3m2mkKUyKneVjQCQCkOZpRX9lsNVbPRx+xWD1fplELAGAMsSlWLNBMSjZitKLdLG63G6+sixgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBd/A5rZmG6yfKEKAAAAAElFTkSuQmCC"
      }],
      step: 0,
      forked: false
    }
  }
  addStep(){
    let newData = this.state.data.splice(0, this.state.step + 1)
    newData.push({
      title: "Another New Step",
      oldGraph: subGraph,
      branch: "data:image/png;base64,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"
    })
    this.setState({
      step: this.state.step + 1,
      data: newData
    })
  }

  forkModel(){
    let newData = this.state.data.splice(0, this.state.step + 1)
    newData.push({
      title: "New Step",
      oldGraph: 'assets/createHyperedges.jpg',
      branch: "data:image/png;base64,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"
    })
    this.setState({
      forked: true,
      step: this.state.step + 1,
      data: newData
    })
  }
  increment(){
    this.setState({
      step: Math.min(this.state.data.length - 1, this.state.step + 1)
    })
  }
  decrement(){
    this.setState({
      step: Math.max(0, this.state.step - 1)
    })
  }

  generateOneHopResult(q){
    const a = JSON.parse(JSON.stringify(this.state.data))
    let z = a[a.length - 1]
    z['newGraph'] = createOneHop;
    a.splice(a.length-1,1,z)
    this.setState({data: a})
  }
  generateSubgraphResult(q){
    const a = JSON.parse(JSON.stringify(this.state.data))
    let z = a[a.length - 1]
    z['newGraph'] = subGraph;
    a.splice(a.length-1,1,z)
    this.setState({data: a})
  }

  updateTitle(newTitle){
    let newData = this.state.data
    console.log(newData);
    newData[this.state.step]['title'] = newTitle.title
    console.log(newData);
    this.setState({
      data: newData
    })
  }

  render(){
    const thisStep = this.state.data[this.state.step];
    const oldGraphUrl = thisStep['oldGraph'];
    const newGraphUrl = ('newGraph' in thisStep) ? thisStep['newGraph'] : null;
    const branchUrl = thisStep['branch'];
    const theTitle = (
      <RIEInput
        value={thisStep.title}
        change={this.updateTitle}
        propName='title'
        validate={_.isString} />
    )
    const leftHandSide = (('gist' in thisStep)
      ? <Gist id={thisStep['gist']} />
      : <NewStepDialogue
          step={this.state.step}
          completedOnehop={this.generateOneHopResult}
          completedSubgraph={this.generateSubgraphResult}
          />
    )
    const versionGraph = (
      <img src={branchUrl} style={{height: "75px"}} />
    )
    return (
      <div className="cell medium-12">
        <div className="grid-x">
          <div className="cell medium-12"
           style={{marginBottom: "1rem"}}>
            <a
              onClick={this.props.return}
              style={{color:"lightgray", fontSize: "14px"}}>&larr; Back to model list</a>
          </div>
          <div className="cell medium-12">
            <div className="grid-x">
              <div className="cell medium-3">
                <div className="button-group">
                  <a className="button left"
                    onClick={this.decrement}>&larr;</a>
                  <a className="button right"
                    onClick={this.increment}>&rarr;</a>
                </div>
              </div>
              <div className="cell medium-6">
                {versionGraph}
              </div>
              <div className="cell medium-3">
                <button className="button add-step"
                  onClick={this.addStep}>Add step</button>
                <button className="button fork"
                  onClick={this.forkModel}>Fork this model</button>
              </div>
            </div>
            <h2>Step {this.state.step + 1}: {theTitle}</h2>
          </div>
          <div className="cell medium-4">
            <img
             src={oldGraphUrl}
             style={{width: "100%"}} />
          </div>
          <div className="cell medium-4">
            <div className="the-code">
              {leftHandSide}
            </div>
          </div>
          <div className="cell medium-4">
            <img
             src={newGraphUrl}
             style={{width: "100%"}} />
          </div>
        </div>
      </div>
    );
  }
}

export { ModelPage };
