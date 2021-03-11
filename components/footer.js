import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Link from "next/link"

export default class Footer extends Component {
  render() {
    return (
      <div className="FooterSec">
          <p className="title">Oujari Hicham</p>
          <img src="./logo.ico" className="logoFooter" />
          <ul className="SocialMediaFooter">
              <li><Link href={this.props.data.facebook}><FacebookIcon/></Link></li>
              <li><Link href={this.props.data.linkedin}><LinkedInIcon/></Link></li>
              <li><Link href={this.props.data.instagram}><InstagramIcon/></Link></li>
              <li><Link href={this.props.data.github}><GitHubIcon/></Link></li>
              <li><Link href={this.props.data.whatsapp}><WhatsAppIcon/></Link></li>
          </ul>
          <div className="Ffooter">
              <p className="left">© Copyright <span>HOujari</span>. All Rights Reserved</p>
              <p className="by">By <span>Oujari Hicham</span></p>
          </div>
      </div>
    );
  }
}
