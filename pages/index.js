import Head from 'next/head'


import Html from 'next/html';


import Nav from "../components/nav"
import Header from "../components/header"
import About from "../components/about"
import Project from "../components/project"
import Ability from "../components/ability"
import Experience from "../components/experience"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Resume from "../components/resume"

import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import RoomIcon from '@material-ui/icons/Room';

export default function Home() {
  const skills = [
        {name:"HTML / CSS",val:90},
        {name:"FLUTTER", val:82},
        {name:"JAVASCRIPT", val:76 },
        {name:"PHP", val:80 },
        {name:"ExpressJs / Sequelize orm", val:86 },
        {name:"ReactJS/NextJS", val:85 },
        {name:"React-Native/Expo", val:80 },
        {name:"SprinBoot", val:84 },
        {name:"JAVA", val:85 },
        {name:"Angular", val:80 },
        {name:"ASP.NET", val:50 },
        {name:"WebScraping : BeautifulSoup", val:80 },
        {name:"Automatisation : Selenium", val:80 },
        {name:"VB.NET", val:90 },
        {name:"Python", val:78 },
        {name:"Linux/Unix", val:65 },
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
            title:"Dustro-app",
            img:"https://theme-division.com/wp-content/uploads/Dustro-Kit-de-modeles-Elementor-pour-entreprise-de-construction.png",
            date:"10 MAR 2021",
            by:"Oujari Hicham",
            description:"Dustro is a web application,it is an awesome Construction Company website. It is a clean & modern",
            lien:"https://engineer-hi.vercel.app/",
            type:1,
            techno:"NextJs/Strapi - MySQL"
          },{
            title:"Dekok-ster",
            img:"/proj/dekokster.png",
            date:"28 August 2021",
            by:"Oujari Hicham",
            description:"Is a web application for an Italian restaurant.",
            lien:"https://dekokster.vercel.app/",
            type:1,
            techno:"NextJs/Springboot"
          },{
            title:"Emi-Cedoc",
            img:"/proj/emi.png",
            date:"28 August 2021",
            by:"Oujari Hicham",
            description:"It is a platform for managing the registrations of doctoral students at the Mohammadia School of Engineering, and monitoring them throughout the training.",
            lien:"https://cedoc-frontend.vercel.app/",
            type:1,
            techno:"ReactJs/ExpressJs"
          },{
            title:"Flash-Food",
            img:"/proj/logoFlashFood.png",
            date:"28 August 2021",
            by:"Oujari Hicham",
            description:"The app for all your needs: Looking for a way to order food and drink without leaving your home? Want to find the perfect restaurant with the push of a button? Now all your needs are met with the mobile application!",
            lien:"https://www.figma.com/file/cGe8yR9S09ebsRh8WzHQNz/Celero-UI?node-id=0%3A1",
            type:2,
            techno:"Flutter/ExpressJs/ORM Sequelize"
          },{
            title:"G-Advisor (Phontom-tech)",
            img:"/proj/gadvisor.png",
            date:"13 JAN 2021",
            by:"Oujari Hicham",
            description:"G-Advisor is a desktop inventory management application, for Phantom-Tech (traineeship).",
            lien:"https://g-advisore.vercel.app/",
            type:3,
            techno:"ReactJs - ChartJs - MySQL - Springboot"
          },{
            title:"Puzzle Game (Android/Ios)",
            img:"/proj/puzzle.jpg",
            date:"05 SEPT 2021",
            by:"Oujari Hicham",
            description:"Puzzle Game is a genre of video game that focuses on thinking. These kind of games lead the player to solve puzzles (such as those of Sokoban).",
            lien:"https://github.com/HichamOujari/puzzle-game-classic",
            type:2,
            techno:"Flutter "
          },{
            title:"Digital Advisor",
            img:"/proj/digitaladvisor.png",
            date:"13 JUIN 2020",
            by:"an internship group",
            description:"Realization of a technical assumption platform and a showcase site(traineeship).",
            lien:"https://digitaladvisor.co.ma/",
            type:1,
            techno:"HTML - CSS - JavaScript - MySQl"
          },{
            title:"Short-TriQ V1.0",
            img:"/proj/shortTriq.png",
            date:"11 Sep 2020",
            by:"Oujari Hicham",
            description:"Web application offring the possibility to custom URL Shortener .",
            lien:"https://shorttriq.herokuapp.com/",
            type:1,
            techno:"ReactJs - MySQL"
          },{
            title:"RandomChat V1.0 (In progress)",
            img:"/proj/randomchat.png",
            date:"20 JAN 2021",
            by:"Oujari Hicham",
            description:"RandomChat is an automated instant messaging website. It connects two users at random, anonymously and without any prior registration requirement.",
            lien:"https://myrandchat.herokuapp.com/",
            type:1,
            techno:"ReactJs - Socket.IO - PeerJs"
          },{
            title:"Baitaille Navale",
            img:"/proj/navale.png",
            date:"13 March 2019",
            by:"Oujari Hicham",
            description:"Baitaille Navale is a board game in which two players must place ships on a secret grid and attempt to “hit” the opposing ships. The winner is the one who manages to sink all of the opponent's ships.",
            lien:"https://baitaille-navale.herokuapp.com/",
            type:1,
            techno:"PHP - JavaScript - MySQL"
          },{
            title:"Digital-Library",
            img:"/proj/digitalLibrary.png",
            date:"20 FEV 2021",
            by:"Group",
            description:"it is a desktop application of an electronic library, allows to reserve, borrow, buy and deliver books.",
            lien:"#",
            type:3,
            techno:"JAVA/Swing - MySQL"
          },
          
        ]
  const experiences = [
    {
      entreprise:"Capitale-tech",
      image:"./Experiences/capitaletech.png",
      date:"July 2021",
      desc:"I had 2 month of work as a mobile developer in Capitale-Tech using flutter/ORM Sequelize"
    },{
      entreprise:"Phontom-tech",
      image:"./Experiences/phontom-tech.png",
      date:"JAN 2021",
      desc:"I had 1 month of work as a senior front end developer in Phantom-Tech Uk"
    },{
      entreprise:"Digital-Advisor",
      image:"./Experiences/digitalAdvisor.png",
      date:"June 2020",
      desc:"I had a 1 month internship in Digital-Advisor Casablanca. The internship subject was to create a technical assumption platform and a showcase site"
    },
  ]
  const resumes = [
    {
      title:"Mohammadia School of Engineers",
      periode:"2019-2022",
      specialite:"Computer science engineering",
      duree:"3 years - Rabat"
    },
    {
      title:"Preparatory Classes Omar Ibn Khattab",
      periode:"2017-2019",
      specialite:"Mathematics & Physics option",
      duree:"2 years - Meknes"
    },
    {
      title:"el Zitoune high school",
      periode:"2016-2017",
      specialite:"Bac Sc.Mathematics A",
      duree:"1 year - Meknes"
    }
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
      <Resume data={resumes}/>
      <Ability skills={skills}/>
      <Experience data={experiences}/>
      <Project data = {projects}/>
      <Contact data={contactMe}/>
      <Footer data={SocialMedia}/>
    </div>
  )
}
