import React, { Component } from 'react';
import InfosD from "./infosD"
export default class Contact extends Component {
  contactInfo = this.props.data
  render() {
    const listInfo = this.contactInfo.map((ele,index)=>{
      return (<InfosD key={index} data={ele}/>)
    })
    return (
      <section id="Contact" className="ContactSec">
        <p className="title">Contact <span>Me</span></p>
        <div className="content">
          <div className="infoSec">
            
          </div>
          <div className="ContactForm">
            <input placeholder="Your Name" required className="inputT" />
            <input placeholder="Your Email" required className="inputT" />
            <input placeholder="Subject" required className="inputT" />
            <textarea placeholder="Message ..." className="message"/>
            <button className="sendBtn">Send Message</button>
          </div>
        </div>
      </section>
    );
  }
}
