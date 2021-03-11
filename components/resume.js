import React, { Component } from 'react';
import Formation from "./formation"
export default class Resume extends Component {
  render() {
    const listResume = this.props.data.map((ele,index)=>{
      return (<li key={index}><Formation data={ele} /></li>)
    })
    return (
      <section id="Resume" className="ResumeSec">
          <p className="title">Resume</p>
          <ul className="content">
            {listResume}
          </ul>
      </section>
    );
  }
}
