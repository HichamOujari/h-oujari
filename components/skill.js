import React, { Component } from 'react';

export default class Skill extends Component {
  render() {
    return (
      <div className="SkillComp">
          <div className="first">
              <p>{this.props.data.name}</p>
              <p>{this.props.data.val}%</p>
          </div>
          <progress className="progBar" value={this.props.data.val} max="100" />
      </div>
    );
  }
}
