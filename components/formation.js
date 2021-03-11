import React, { Component } from 'react';

export default class Formation extends Component {
  render() {
    return (
      <div className="formationCard">
          <div className="title_periode">
              <p className="title">{this.props.data.title}</p>
              <p className="periode">{this.props.data.periode}</p>
          </div>
          <p className="specialite">{this.props.data.specialite}</p>
          <p className="duree">{this.props.data.duree}</p>
      </div>
    );
  }
}