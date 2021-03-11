import React, { Component } from 'react';
import ProjectCard from "./projectCard"

export default class Project extends Component {
  projects = this.props.data
  filter(selon){
    var tmp = document.getElementsByClassName("TypeProject");
    for(var i=0;i<4;i++){
      tmp[i].className=tmp[i].className.replace(" Active","")
    }
    tmp[selon].className+=" Active"
    tmp = document.getElementsByClassName("ProjectCard")
    for(var i=0;i<tmp.length;i++){
      if(selon===0 || tmp[i].className.includes('type'+selon)){
        tmp[i].className=tmp[i].className.replace("display-none","display-flex")
      }else{
        tmp[i].className=tmp[i].className.replace("display-flex","display-none")
      }
    }
  }
  render() {
    const listProject = this.projects.map((ele,index)=>{
      return (<ProjectCard key={index} data={ele}/>)
    })
     return (
      <section id="Projects" className="ProjectsSec">
          <p className="Title"><span>My</span> Projects</p>
          <p className="shortDecript">The source code of all these projects is available in my github</p>
          <ul className="type">
              <li className="TypeProject Active" onClick={()=>{this.filter(0)}}>All</li>
              <li className="TypeProject" onClick={()=>{this.filter(1)}}>Web</li>
              <li className="TypeProject" onClick={()=>{this.filter(2)}}>Mobile</li>
              <li className="TypeProject" onClick={()=>{this.filter(3)}}>Desktop</li>
          </ul>
          <div id="IDListProjects" className="ListProject">
              {listProject}

          </div>
      </section>
    );
  }
}
