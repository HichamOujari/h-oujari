import React, { Component } from 'react';

export default class StageCard extends Component {
  render() {
    return (
      <div className="StageCard">
            <img src={this.props.data.image} />
            <div className="content">
                <div className="title">
                    <p className="entreprise">{this.props.data.entreprise}</p>
                    <p className="date">{this.props.data.date}</p>
                </div>
                <p className="desc">{this.props.data.desc}</p>
            </div>
      </div>
    );
  }
}
