import React, { Component } from 'react';
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';

export default class InfosD extends Component {
  icons=[
    <RoomIcon className="ContactIcons" />,
    <MailIcon className="ContactIcons" />,
    <CallIcon className="ContactIcons" />
  ]
  render() {
    return (
      <div className="infosD">
          {this.icons[this.props.data.icon]}
          <div className="info">
              <p className="title">{this.props.data.name}</p>
              <p className="content">{this.props.data.val}</p>
          </div>
      </div>
    );
  }
}
