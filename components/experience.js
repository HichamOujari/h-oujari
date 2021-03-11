import React, { Component } from 'react';
import StageCard from './stageCard'
export default class Experience extends Component {
  render() {
    const listStage = this.props.data.map((ele,index)=>{
        return (<StageCard key={index} data={ele}/>)
    })
    return (
      <section id="experiences" className="experienceSec">
          <p className="title"><span>My </span>Experience</p>
          <div className="content">
              {listStage}
          </div>
      </section>
    );
  }
}
