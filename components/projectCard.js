import React, { Component } from 'react';
import LaunchIcon from '@material-ui/icons/Launch';
import Link from "next/link"
export default class ProjectCard extends Component {
  render() {
    return (
      <div className={"ProjectCard display-flex type"+this.props.data.type}>
          <div className="Secimg">
            <img className="IMGProject" src={this.props.data.img} />
            <div className="whenHover">
                <LaunchIcon className="icon"/>
                <Link href={this.props.data.lien}>Show Demo version</Link>
            </div>
          </div>
          <div className="DetailProject">
              <p className="title">{this.props.data.title}</p>
              <p className="date">{this.props.data.date} <span>By {this.props.data.by}</span></p>
              <p className="description">{this.props.data.description}</p>
          </div>
      </div>
    );
  }
}
