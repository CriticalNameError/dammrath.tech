import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import Particles from 'react-particles-js';
import Granim from 'react-granim'
import granim from 'granim'
import { slide as Menu } from 'react-burger-menu';

import WAVES from 'vanta/dist/vanta.waves.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

// export default class Header extends React.Component {
//   constructor() {
//     super()
//     this.vantaRef = React.createRef()
//   }
//   componentDidMount() {
//     this.vantaEffect = WAVES({
//       el: this.vantaRef.current
//     })
//   }
//   componentWillUnmount() {
//     if (this.vantaEffect) this.vantaEffect.destroy()
//   }
//   render() {
//     return <section class={"Header"} style={{height: "75%"}}ref={this.vantaRef}>
//       Foreground content goes here
//     </section>
//   }
// }




class Header extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x788c6e,
  shininess: 9.00,
  waveHeight: 18.50,
  waveSpeed: 0.65,
  zoom: 1.22
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {



    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var bio = this.props.data.bio;
      var profilepic= "images/"+this.props.data.image;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (<>
      <div id="home"  ref={this.vantaRef} style={{position: "realtive", height: "100vh"}}>
         {/* <Particles  params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}}/> */}

      {/* <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         <div style={{textAlign: "left", height: "0"}}>
            <div style={{background: "#444", height: "48px"}}>
         <img src="images/logo.png" width="100px" style={{marginTop: "0px", marginBottom: "-26px", marginLeft: "20px",paddingTop: "0px", paddingBottom: "0px"}}></img>
         </div>
         </div>
         <ul id="nav" className="nav" style={{
            background: "#444",
            // backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
            // backgroundImage: "linear-gradient(to left, #868f96 0%, #596164 100%)",
            backgroundImage: "linear-gradient(to right, #333 0%, #444 100%)",
            // background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
            // backgroundBlendMode: "multiply,multiply",
            zIndex: -100}}>
     
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav> */}

      <div className="row banner" style={{zIndex: 5, textAlign: "center", paddingTop: "20vh"}}>
 
      {/* <img src="images/logo_1.png" width="500px"  data-aos="fade-down" data-aos-duration="1200"></img> */}
      <img className="profile-pic"  src={profilepic} alt="Martin Dammrath Profile Pic" data-aos="fade-down" data-aos-duration="1200" />
         <div className="banner-text" data-aos="fade-up" data-aos-delay="600"
     data-aos-duration="3000" data-aos-anchor="top">
        


            <h2 className="responsive-headline" style={{}} >
               {name}
               </h2>
               <p style={{color: "#313131"}}>{bio}</p>
            {/* <h3>{description}.</h3> */}
            
            <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle icon-down" style={{fontSize: "3em"}}></i></a>
      </p>
            {/* <ul className="social">
               <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul> */}
         </div>
      </div>

      

   </div>
   </>
    );
  }
}

export default Header;
