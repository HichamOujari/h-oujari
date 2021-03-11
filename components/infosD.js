import React, { Component } from 'react';

export default class InfosD extends Component {
  render() {
    return (
      <div className="infosD">
          {this.props.data.icon}
          <div className="info">
              <p className="title">{this.props.data.name}</p>
              <p className="content">{this.props.data.val}</p>
          </div>
      </div>
    );
  }
}
