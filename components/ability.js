import React, { Component } from 'react';
import Skill from "../components/skill"
export default class Ability extends Component {
    data = this.props.skills
  render() {
    const listSkills= this.data.map((ele,index)=>{
        return (<Skill key={index} data={ele} />)
    })
    return (
      <section id="Abilities" className="MyAbilities"> 
          <p className="title"><span>My </span>Abilities</p>
          <p className="description">
          I have carried out many projects based on these technologies / languages ​​below.
          </p>
          <div className="SkillSec">
              {listSkills}
          </div>
      </section>
    );
  }
}
