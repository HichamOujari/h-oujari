import React,{Component} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Link from "next/link"

export default class Nav extends Component {
  render() {
    const menuOpenClose = ()=>{
        document.getElementById("MenuCheckBox").click()
    }
    return (
      <nav>
          <Link href="/"><p className="Navlogo">HOujari<span>.</span></p></Link>
          <MenuIcon onClick={menuOpenClose} className="NavIconUl"/>
          <input hidden type="checkbox" id="MenuCheckBox"/>
          <ul className="NavUl">
            <CloseIcon onClick={menuOpenClose} className="NavMenuIconClose"/>
            <Link href="#"><li onClick={menuOpenClose}>Home</li></Link>
            <Link href="#About"><li onClick={menuOpenClose}>About</li></Link>
            <Link href="#Projects"><li onClick={menuOpenClose}>My Projects</li></Link>
            <Link href="#Abilities"><li onClick={menuOpenClose}>My Abilities</li></Link>
            <Link href="#Contact"><li onClick={menuOpenClose}>Contact</li></Link>
          </ul>
      </nav>
    );
  }
}