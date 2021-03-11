import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Link from "next/link"

export default class About extends Component {
  render() {
    return (
      <section id="About" className="AboutSec">
        <img id="MEPicture" alt="..." src="/ME.jpg" />
        <div className="infoAbout">
          <p className="Title">About <span>Me</span></p>
          <p className="SousTitle">Hello! <span>I'M Oujari Hicham.</span></p>
          <div className="description">
            <p className="1">
              I am a student Software Engineer at Mohammadia school of engineering with more than 2 years of experience as a web developer. 
            </p>
            <p className="2">
              My favorite language is Javascript because it offers flexibility, simplicity and the ability to create dynamic web applications, web servers (Node.js), desktop applications (electron), mobile applications (ReactJs / Expo), games (WebGL), IoT (Red Node) etc.
            </p>
            <p className="3">
              I am truly passionate about development, technology and AI because it is the perfect way to build a great future where much of our suffering will be gone.
            </p>
          </div>
          <ul className="ListSocialMedia">
              <Link href={this.props.data.linkedin}><li><LinkedInIcon className="MIcon"/></li></Link>
              <Link href={this.props.data.github}><li><GitHubIcon className="MIcon"/></li></Link>
              <Link href={this.props.data.instagram}><li><InstagramIcon className="MIcon"/></li></Link>
              <Link href={this.props.data.facebook}><li><FacebookIcon className="MIcon"/></li></Link>
              <Link href={this.props.data.whatsapp}><li><WhatsAppIcon className="MIcon"/></li></Link>
          </ul>
        </div>
        <br/>
      </section>
    );
  }
}
