import React, { Component } from 'react';
import InfosD from "./infosD"
import emailjs, { init } from 'emailjs-com';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

export default class Contact extends Component {
  contactInfo = this.props.data
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    stateSend:false,
  };
  send(e) {
    e.preventDefault();
    this.setState({
      stateSend:true,
    })
    emailjs.send("service_qf2dzer", "template_rx8o3in", {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    }).then(rsp => { document.location.reload(); });
  }
  render() {
    init("user_WyEJxiUFl6WZq6e5wEgdS");
    const listInfo = this.contactInfo.map((ele, index) => {
      return (<InfosD key={index} data={ele} />)
    })
    return (
      <section id="Contact" className="ContactSec">
        <p className="title">Contact <span>Me</span></p>
        <div className="content">
          <div className="infoSec">
            {listInfo}
          </div>
          <form onSubmit={this.send.bind(this)} className="ContactForm">
            <input placeholder="Your Name" onChange={(e) => { this.setState({ name: e.target.value}) }} required className="inputT" />
            <input placeholder="Your Email" required onChange={(e) => { this.setState({ email: e.target.value }) }} className="inputT" />
            <input placeholder="Subject" onChange={(e) => { this.setState({ subject: e.target.value }) }} required className="inputT" />
            <textarea placeholder="Message ..." onChange={(e) => { this.setState({ message: e.target.value }) }} required className="message" />
            <button disabled={this.state.stateSend} className="sendBtn">{this.state.stateSend?<HourglassEmptyIcon/>:"Send Message"}</button>
          </form>
        </div>
      </section>
    );
  }
}
