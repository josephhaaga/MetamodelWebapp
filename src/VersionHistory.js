import React, { Component } from 'react'

class VersionHistory extends Component {
  componentDidUpdate() {
    // https://blog.cloudboost.io/using-html5-canvas-with-react-ff7d93f5dc76
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 20;

    for(var i=0; i < this.props.numSteps; i++){
      ctx.beginPath();
      ctx.arc(25+(100*i), centerY, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'green';
      ctx.fill();
      if(i === this.props.activeStep){
        console.log("drawing stroke!")
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'yellow';
        ctx.stroke();
      }
    }

  }
  render() {
    return (
      <div>
        <canvas ref="canvas" width={640} height={75} />
      </div>
    )
  }
}

export { VersionHistory }
