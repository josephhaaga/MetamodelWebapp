import React, { Component } from 'react';
import Gist from 'react-gist';
import { NewStepDialogue } from './NewStepDialogue.js';

class ModelPage extends Component {
  constructor(props){
    super(props)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.forkModel = this.forkModel.bind(this)
    this.data = [
      {
        gist: '4ca633e244d5eb5e10246db6b9879e62',
        graph: 'assets/createNodes.jpg',
        branch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhgAAABqCAYAAAD+8SjzAAAE00lEQVR42u3dv28bVRwA8IzpeWBhRLRCzLQTElM6siHGTo1YGTowo06omeoKJ46qCCxARSjiV1FV7KKoXZAYkBLkJhty/wP3PzD3DSmYkNw59tlK330+0pOiNH5XfXW+7/fevXtvaQkAAAAAAAAAAAAAAAAAAAAAAAAAAAAASMmfvyy90u9euNHvZp2n3cbjk9p+L7v5tNe4LloAQKH9bvbeYQHRa4zO0vq97If4rAgCAP842Fm+OE1h8b+W99HvNi6LKADUXDwKmbmwOD6ikfdZ97i2Wq2r6+vrzY2Njcd5G2xubo6i5T/vxu/i33JXnIHiB5BgcZF1qi4u/i0ysk4dY5onv9XxhFjW4m/zZGkui/gBpCEmaM6ruBhrtbnwx9103F1PmhhPSJS7eR+X6no+ih+A4kKRcUwM5+cJbjhtchxLksPoq27no/gBJCAmYeZtWFYY7P386mjn25XR9hcfjr7ufPSfdv/etdGT79+e8FFJY5jyxM9IaLMmxuOtTklS/ABSGb2Y4G2RKB627t4uvZB/vvXJZIVGfswUY3k0rD+sOkFGn3UY7hc/gFSKiwkejXz31QdnvqDHZ+r4qCRPZHtVJ8fxOQWpn4/iB5CIfjcbFBUB8Uhk2gt6fLbkrZJBYslxdV7JcSxJriZcXIgfQAoOV+ksKAB+/fGtmS/o0UfRMVJa7TNPXs8WkCAHqZ6P4geQiDzBN4smdMZ8ilkv6NFH9HXacXrb747mnVRSa+12WxxqHD9XLuAlKDCy3UUk/ujrtOP89tObkp6mKTCAxEYwTk388eppVRfE6KvoWO6KjWCInwIDqEmBUfVFUYEhQYqfAgNQYCgwNE2BAaDA0DQFBsBLUGB8+dnHlV0Qoy+PSDTxU2AAdSkwCpYIn2b1zmlW9axirQ1zCMTPHAyAc6TfzTrzWMHzLCt6VnkcTTOCAXA+HpEU7kNS1UJbVe9z4nGCxwlGMADOsYOd5YtlO6jOejEs21k1/g+pxHMRS12nfD4uaKnwZ775AIsYxSjZqv3+vWtTX8zjs3Xasn0Rm3W98+n2SsIFhs3OAFJRtuFZtIffvH/mC3l8pqzflDY6G0uS89xu/I+lWw/eSHwUY57x2/ONBzhHoxgvJmNu3b090ZyLsm3aUxy9eKHZbF5pt9vP5zBv4Pna2trrqZ+L84xf3vcl33aABep3G5dLC4K8/f7gtcPHHicVGlFYxKZmRTunjrc4ZqrxbLVaV6tOkJF463I+ih9AUkXGhRuTFAZVtDhWHZJkFXfi0Uf0VbfzUfwAkioyTl8Xo7riIuvUJZ5x1zzLnIL4bJ2H9cUPICH7vezmvIqL6LuOMY03F87yCmb8rbcdxA8gObEAV7/bGFZcYFyve1yP7sjv5O3J+J15/Hz0uzvmCogfQNL+XoQr2529sMh2U57QCQBMISZk9rvZYIq5FgOjFgBAoVgUKyZoFhcbhyMezYNHyysiBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA7fwFhmVz9j755m4AAAAASUVORK5CYII="
      }, {
        gist: '40627a247ac785b610f12caa25dabe00',
        graph: 'assets/createEdges.jpg',
        branch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhgAAABqCAYAAAD+8SjzAAAEtklEQVR42u3dPW8cRRgAYJfOXkFDGSkpqEkq2qRMhyhT2aKlSEGNUtHGlmyfFVlwAhSEIr6CEOyBrKRBokCypYvdIfsfXP7Bse+RwBGc3fvYO9jZ55FGshzfzGnyau7dmbmZtTUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF74/ee11wb5pTuDPOs9zTuPLyon/ezu035nQ28BAKVO8uztcQLR74xmKYN+9k28Vg8CAH85PVy/Mk9i8a9S1DHIO9f0KADJ2tnZubm7u7u1t7f3uChn+/v7oyjFz0fxu/i3wvW291MshSycWLw8o1HUKf7EH0BSisF7c3JAryrxt8Vg38q9BOM9FjUnF38nGVlP/Ik/gMaLp8F4Opx2YL9goD8q6rjalv6KDZrLSi4myob4E38AjRXT0cUAPZx3cJ8Y5IdRl+RCkiH+ACQXNxcd2F8uKQ/ysQmzKMOqxOD4x9dHh1/eGD385L3R5733/1EePbg9evL1W1MulXSGKW/8FH8ACXo+LT2se4CPOlOdrp7m2yKRPBzcv1fZTx8ffDhdolG0Kf7EH0BjFAPxcd2D++SaeHLJxRRLI1999u7MfRWvaeNSifgDSDO52FzW4D4xyG+m1GeDPDsrSwJiSWTevorXVnyr5Ez8tTv+AJoywJ+vYIBP5kNxfEpnSQLwy7dvLtxfUUdZGymd9in+ABK0jI11ryrdbne0qraWWfoPb5Vu6Iz9FIu2EXVEXa9qJ95DCn25ytL0+DNaAU17etz24TNb+fW7N1bywV+WyMR78H/RrmK0ApqWYDzxBDlbKVu6iK+e1tVO1FXWllkFMxgA/+cE49wAX1+C0eS2JBgSDIDamHqWYCgSDAAJhgRDgiHBALBE0rYE49OPPqitnajLEokiwQCammDY5FnjGRXznN45z6medZy1YQ+GBANgmQmGr6nWeNLmIid4/lftKBIMgNo5aKvemYUodR20Vfc9Jw7aMoMBsOpZjFUc1XyeSn+dHq5fqbpBddH+qrpZNd6D+Gtn/AE0aYB32dSMqq5qf/Tg9tx9Fa9t05Xt4g8g7SRjmddlH6fWX1UXnkX54Yt3Zu6reE1VvSlddCb+ABK3tbV1vdvtPlvCuvezou6rKfZZ1SzGi82YB/fvTbXnouqa9hRnL8QfQAssY8NnfHCk2l+DvHOtMiEoym/fXx4ve1yUaERiEZeald2cOlmiTfEn/gAaOcjX8SQZdURdqffXIL90Z5rEoI4SbYk/8QfQWPHUt8iaeLy2TdPSgzzrLT+5yHriT/wBJCF23s/yFcL427bu1j/pZ3eXlVxE3eJP/AGk+kS5HceKTz5Zxs/Pf7dtrXttrUgGNgZ5Z1hzgrEh/sQfAC335yFc2dHiiUV2lPKGTgBgDrEhc5BnZ3PstTgzawEAlIpDsWKDZnmyMZ7x2Dr9af2GHgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaKA/AENIIawr6Ae1AAAAAElFTkSuQmCC"
      }, {
        gist: '4789af32d8a408524a68473a7997f3fb',
        graph: 'assets/createHyperedges.jpg',
        branch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhgAAABqCAYAAAD+8SjzAAAEzUlEQVR42u3dvW8bZRgA8IzpeWBhRLRCzLQTElMY2RBjp0SsDB2YUSfUTHVEEkdVBBagIhTxVVQVuyhqFyQGpAS5yYac/8D9D8w9oQWnuHf+uDs7zu8nPVKUxu8lj+w+z929975LSwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUIy/fl16pdO6dKPTSppPWrVHw+Kondx80q6tyhYAkOmolbx/2kC0a/1xotNOfozXyiAA8K/j/eXLkzQW/4t0jE6rdlVGAebY5ubmu1tbW/Xt7e1HaXR3dnb6EenXB/G9+LfUNZmSv2nErZCpG4sXr2ikY3oHAsyZtPitDRbEvIifTYule+HyN0FzkTSLbi7+azKSpncjwByIs+k4ux61MA4plAfpGFfkT/5GERM0y2ouBkLjCzBLcTk/LXC9SYvjQJHsxVjyJ39z0FxoMgBmXRynLYwvxkVqMuRvPDEJM41eXmNw+Mur/f3vVvp7X37U/6b58Zm4d/d6//EPb494q6TWM/EToGLPLuv3ii6QMeZFuNwvfxNcvRjhaZFoHnbv3M7N0xe7n47WaKTH9GkHqFBayA6LLo6DcwrkT/7ONBcj3Br5/usPx85VvMatEoD5KY5rZRXHgSK5Jn/y91ynlXSzmoC4JTJpruK1OU+VdH3qAaopkCcVFMiu/MlfOF2lM6MB+O2nt6bOV4yRdQyrfQKUrIyJiS+LRqPRr+pYixiLkr/23nuZEzpjPsW0x4gxYqyXHSd+h/OWN/9bAeft7HtD8RZVxu8/v1lJ4c9qZOJ30GAAlNtgPHYGfj7+pkXJX9ati3j0tKjjxFhZx9JgAJTbYJwokBqMeWkwzvOxNBgAA1yyFxoMDQaABkNoMDQYAG6ReLJDjFP0v/r8k8KOE2NpMABm12CY5GkORqWRtUbFJKt3TrKqZxFrbWgwALIbDI+pikoja6XNaVbwnNVxNBgAQ1hoy9WSqiNvv5CiFtoqep8TDQbA+Fcxqljq+kT+FJdwvL98OW8H1WnzlbezavwOPvkA5RdIm3XNef7e+WxvZZFylrdV+7271yfOVbzWlu0A81Mky9xu/FD+psrfn0u37r+xSPnK2/As4sG3H4ydq3hN3rg2OgOoUL1ev9ZoNJ6WMG/gaTr2FfmbPH/r6+uvL2LO8q5iPJ+MuXvn9khzLvK2aXf1AmBGypjwGYVX/uRvmE6rdjW3IUjjj/uvnd72GNZoRGMRm5pl7Zw6GHFMn3SAGRXJIs7EY4wYS/7kL7vJuHRjlMagiIhj+YQDzFCcNU8zpyBeexFui8hfUU1G0iy/uUiaPtkAcyKejhjnEcz42UV+WkT+ynPUTm6W1VzE2N6NAPN7Rr4Ry4oPnpnH18++t3GR5lrIXznSZmC106r1Cm4wVr0DAeCC+2cRruRg+sYiOTChEwA4IyZkdlpJd4K5Fl1XLQCATLEoVkzQzG42Tq941I8fLq/IGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwE38DqHUf6UJJIn8AAAAASUVORK5CYII="
      }]
    this.state = {
      step: 0,
      forked: false
    }
  }
  forkModel(){
    this.data = this.data.splice(0, this.state.step + 1)
    this.data.push({
      graph: this.data[this.state.step].graph,
      branch: "data:image/png;base64,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"
    })
    this.setState({
      forked: true,
      step: this.state.step + 1
    })
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
    // const numSteps = this.
    const thisStep = this.data[this.state.step];
    const graphUrl = thisStep['graph'];
    const branchUrl = thisStep['branch'];
    const leftHandSide = (('gist' in thisStep)
      ? <Gist id={thisStep['gist']} />
      : <NewStepDialogue />
    )
    const versionGraph = (
      <img src={branchUrl} />
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
                <button className="button fork"
                  onClick={this.forkModel}>Fork this model</button>
              </div>
            </div>
            <h2>Step {this.state.step + 1}</h2>
          </div>
          <div className="cell medium-6">
            <div className="the-code">
              {leftHandSide}
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
