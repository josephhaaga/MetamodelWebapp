import React, { Component } from 'react';

class OneHop extends Component {
  render(){
    return (
      <div>
          <li className="accordion-item static" style={{listStyleType: "none"}}>
            <h4 className="accordion-title">One Hop</h4>
            <div className="accordion-content">
              <img src="assets/OneHop.jpg" />
            </div>
          </li>
      </div>
    )
  }
}

export { OneHop }
