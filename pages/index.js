import Head from 'next/head'
import Nav from "../components/nav"
import Header from "../components/header"
import About from "../components/about"
import Project from "../components/project"
import Ability from "../components/ability"
import Contact from "../components/contact"
import Footer from "../components/footer"

import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';

export default function Home() {
  const skills = [
        {name:"HTML",val:100},
        {name:"CSS", val:90},
        {name:"JAVASCRIPT", val:76 },
        {name:"PHP", val:80 },
        {name:"ExpressJs", val:70 },
        {name:"ReactJS/NextJS", val:80 },
        {name:"React-Native/Expo", val:80 },
        {name:"SprinBoot", val:40 },
        {name:"JAVA", val:80 },
        {name:"ASP.NET", val:50 },
        {name:"VB.NET", val:90 },
        {name:"Linux/Unix", val:60 },
      ]
  const SocialMedia={
    linkedin:"https://www.linkedin.com/in/hicham-oujari/",
    github:"https://github.com/HichamOujari",
    instagram:"https://www.instagram.com/hicham.oj.7",
    facebook:"https://www.facebook.com/hicham.oj.3745",
    whatsapp:"https://wa.me/?phone=212762818251"
  }
  const projects = [
          {
            title:"Short-TriQ V1.0",
            img:"/shortTriq.png",
            date:"11 Sep 2020",
            by:"Oujari Hicham",
            description:"Web application offring the possibility to custom URL Shortener .",
            lien:"https://shorttriq.herokuapp.com/",
            type:1,
            techno:"ReactJs - MySQL"
          },
          {
            title:"RandomChat V1.0 (In progress)",
            img:"/randomchat.png",
            date:"20 JAN 2021",
            by:"Oujari Hicham",
            description:"RandomChat is an automated instant messaging website. It connects two users at random, anonymously and without any prior registration requirement.",
            lien:"https://myrandchat.herokuapp.com/",
            type:1,
            techno:"ReactJs - Socket.IO - PeerJs"
          },
          {
            title:"Baitaille Navale",
            img:"/navale.png",
            date:"13 March 2019",
            by:"Oujari Hicham",
            description:"Baitaille Navale is a board game in which two players must place ships on a secret grid and attempt to “hit” the opposing ships. The winner is the one who manages to sink all of the opponent's ships.",
            lien:"https://baitaille-navale.herokuapp.com/",
            type:1,
            techno:"PHP - JavaScript - MySQL"
          },
          {
            title:"G-Advisor (Phontom-tech)",
            img:"/gadvisor.png",
            date:"13 JAN 2021",
            by:"Oujari Hicham",
            description:"G-Advisor is an desktop inventory management application, for Phantom-Tech (traineeship).",
            lien:"https://g-advisore.vercel.app/",
            type:3,
            techno:"ReactJs - ChartJs - MongoDB - Springboot"
          },
          {
            title:"Digital Advisor",
            img:"/digitaladvisor.png",
            date:"13 JUIN 2020",
            by:"an internship group",
            description:"Realization of a technical assumption platform and a showcase site(traineeship).",
            lien:"https://digitaladvisor.co.ma/",
            type:1,
            techno:"HTML - CSS - JavaScript - MySQl"
          },
        ]
  const descriptions = ["Software Engineering.","Web developer.","Mobile developer.","Desktop Developer.","Graphic Designer."]
  const contactMe = [
                  {
                    name:"Location",
                    icon:<RoomIcon className="ContactIcons" />,
                    val:"14 Street N8 douar haj Driss Meknes, Morocco"
                  },
                  {
                    name:"Email",
                    icon:<MailIcon className="ContactIcons" />,
                    val:"hichamoujari99@gmail.com"
                  },
                  {
                    name:"Call",
                    icon:<CallIcon className="ContactIcons" />,
                    val:"+(212) 762-828-251"
                  },
                ]
  
  return (
    <div>
      <Head>
        <title>HOujari | Oujari Hicham</title>
        <link rel="icon" href="/logo.ico" />
        <meta name="description" content="Hello! I'M Oujari Hicham. I am a student Software Engineer at Mohammadia school of engineering with more than 2 years of experience as a web developer. My favorite language is Javascript because it offers flexibility, simplicity and the ability to create dynamic web applications, web servers (Node.js), desktop applications (electron), mobile applications (ReactJs / Expo), games (WebGL), IoT (Red Node) etc. I am truly passionate about development, technology and AI because it is the perfect way to build a great future where much of our suffering will be gone."/>
        <meta name="robots" content="index, archive"/>
        <link rel="canonical" href="https://h-oujari.vercel.app/"/>
        <meta name="keywords" content="hicham, oujari, hichamouja, hicham o'j, o'j" />
        <meta name="author" content="Oujari Hicham"/>
      </Head>
      <Nav/>
      <Header data={descriptions}/>
      <About data={SocialMedia}/>
      <Project data = {projects}/>
      <Ability skills={skills}/>
      <Contact data={contactMe}/>
      <Footer data={SocialMedia}/>
    </div>
  )
}
