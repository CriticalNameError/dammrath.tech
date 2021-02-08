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
      zoom: 0.75
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {

   // var granimInstance = new granim({
   //    element: '#granim-canvas',
   //    name: 'granim',
   //    opacity: [1, 1],
   //    states : {
   //        "default-state": {
   //            gradients: [
   //                ['#834D9B', '#D04ED6'],
   //                ['#1CD8D2', '#93EDC7']
   //            ]
   //        }
   //    }
   // });

      let config = {
        num: [1, 1],
        rps: 0.1,
        radius: [5, 40],
        life: [5, 10],
        v: [2, 3],
        tha: [-40, 40],
        alpha: [1, 0.5],
        scale: [.1, 0.4],
        position: "all",
        color: ["#ffffff"],
        cross: "dead",
        // emitter: "follow",
        random: 5
      };

      let config1 =  {
         particles: {
           number: { value: 80, density: { enable: true, value_area: 800 } },
           color: { value: "#ffffff" },
           shape: {
             type: "circle",
             stroke: { width: 0, color: "#000000" },
             polygon: { nb_sides: 5 },
             image: { src: "img/github.svg", width: 100, height: 100 }
           },
           opacity: {
             value: 0.5,
             random: false,
             anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
           },
           size: {
             value: 3,
             random: true,
             anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
           },
           line_linked: {
             enable: true,
             distance: 150,
             color: "#ffffff",
             opacity: 0.4,
             width: 1
           },
           move: {
             enable: true,
             speed: 6,
             direction: "none",
             random: false,
             straight: false,
             out_mode: "out",
             bounce: false,
             attract: { enable: false, rotateX: 600, rotateY: 1200 }
           }
         },
         interactivity: {
           detect_on: "canvas",
           events: {
             onhover: { enable: true, mode: "repulse" },
             onclick: { enable: true, mode: "push" },
             resize: true
           },
           modes: {
             grab: { distance: 400, line_linked: { opacity: 1 } },
             bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
             repulse: { distance: 200, duration: 0.4 },
             push: { particles_nb: 4 },
             remove: { particles_nb: 2 }
           }
         },
         retina_detect: true
       };

     
  
      if (Math.random() > 1) {
        config = Object.assign(config, {
          onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(
              particle.p.x,
              particle.p.y,
              particle.radius * 2,
              particle.radius * 2
            );
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
          }
        });
      }

    if(this.props.data){
       var project = this.props.data.project;
       var github = this.props.data.github;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <div id="home" class="container" ref={this.vantaRef} >
        <h1>HALLO</h1>
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
     <div >Some Stuff!!</div>
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

      <div className="row banner" style={{zIndex: 5}}>
 
      <img src="images/logo_1.png" width="500px"  data-aos="fade-down" data-aos-duration="1200"></img>
        
         <div className="banner-text" data-aos="fade-up" data-aos-delay="600"
     data-aos-duration="3000" data-aos-anchor="top">
            <h2 className="responsive-headline" style={{}} >
           
               {name}
              
               </h2>
            <h3>{description}.</h3>
            <hr />
            {/* <ul className="social">
               <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
               <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
            </ul> */}
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle icon-down" ></i></a>
      </p>

   </div>
    );
  }
}

export default Header;
