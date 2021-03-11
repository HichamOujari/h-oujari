import React, { Component } from 'react';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';
import Link from "next/link"

export default class componentName extends Component {
    DetailsAbout = this.props.data
    componentDidMount(){
        const setAbout = (index)=>{
            var Ele = document.getElementById("DetailAbout")
            var context = Ele.innerHTML.split("").reverse()
            context.map((ele,i)=>{
                setTimeout(()=>{
                    Ele.innerHTML = Ele.innerHTML.replace(ele,"")
                },i*200)
            })
            setTimeout(()=>{
                context = this.DetailsAbout[index].split("")
                context.map((ele,i)=>{
                    setTimeout(()=>{
                        Ele.innerHTML+=ele
                    },i*200)
                })
                setTimeout(()=>{
                    setAbout((++index)%(this.DetailsAbout.length))
                },context.length*200+2000)
            },context.length*200+1000)
        }
        setAbout(0)
    }
    render() {
        return (
        <div className="header">
                <p className="welcome">Welcome</p>
                <p className="IMDetail">I'M <span id="DetailAbout"></span> |</p>
                <p className="sousDetail">Being someone driven by the passion for web development and motivated to learn something new everyday</p>
                <Link href="./MyCv.pdf"><button className="btnDownload">DOWNLOAD CV</button></Link>
                <br/>
                <div className="scrollDown">
                    <PlayForWorkIcon className="icon" />
                </div>
        </div>
        );
  }
}
