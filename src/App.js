import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import { bubble as Menu } from 'react-burger-menu'
import AOS from 'aos';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '60px',
    height: '30px',
    right: '20px',
    top: '8px'
  },
  bmBurgerBars: {
    background: '#ff9100'
  },
  bmBurgerBarsHover: {
    background: '#b96900'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: "rgb(68, 68, 68)",//'#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: "rgb(68, 68, 68)"// '#373a47'

  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class App extends Component {

  constructor(props){
    super(props);
    AOS.init();
    this.state = {
      foo: 'bar',
      resumeData: {},
      menuIsOpen: "",
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  

  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
    AOS.init();
  }

  render() {
    return (
      <div className="App outer-container" >
          <div className={"nav-bar-mobile"}> <div className={"logo"} style={{position: "fixed", top: "4px", left: "0px"}}><b>[</b>D<b>]</b></div></div>
         <nav id="nav-wrap">
        
        {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
       <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
        <div style={{textAlign: "left", height: "0"}}>
           <div style={{background: "#444", height: "48px"}}>
        <img src="images/logo.png" width="100px" style={{marginTop: "0px", marginBottom: "-26px", marginLeft: "20px",paddingTop: "0px", paddingBottom: "0px"}}></img>
        </div>
        </div> */}
       
        <ul id="nav" className="nav" style={{
           background: "#444",
           // backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
           // backgroundImage: "linear-gradient(to left, #868f96 0%, #596164 100%)",
           backgroundImage: "linear-gradient(to right, #333 0%, #444 100%)",
           // background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898",
           // backgroundBlendMode: "multiply,multiply",
           zIndex: -100}}>
     <div className={"fixed-top-left logo"}><b>[</b>D<b>]</b></div>
           <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
           <li><a className="smoothscroll" href="#about">About</a></li>
          <li><a className="smoothscroll" href="#resume">Resume</a></li>
           {/* <li><a className="smoothscroll" href="#portfolio">Works</a></li>
           <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
        </ul>
     </nav>
   
         <Menu  
         right
         customBurgerIcon={<span className={"burger-icon"}><b>[</b>MENU<b>]</b></span>}
        //  customBurgerIcon={ <div className={"menu-link burger-link"} style={{cursor: "pointer!important", width: "8px"}}><b style={{fontSize: "1.5rem", marginTop: "-5px", textOrientation: "upright", writingMode: "vertical-rl", letterSpacing:"-.4em", background: "#ff9100", color: "#ddeabf", border: "2px solid #ddeabf", borderLeft: "0", paddingBottom: "8px", marginLeft: "-2px"}}>MENU</b></div> } 
         isOpen={this.state.menuIsOpen} 
         onOpen={(e)=>{this.setState({menuIsOpen: true})}} 
         onClose={(e)=>{this.setState({menuIsOpen: false})}}  
         outerContainerId={ "outer-container" } 
         disableAutoFocus styles={styles}
         className={"menu"}>

          <ul>
           <li className="current" ></li>
           <li><a className="smoothscroll menu-link" href="#home" onClick={(e)=>{this.setState({menuIsOpen: false})}}>Home</a></li>
            <li><a className="smoothscroll menu-link" href="#about" onClick={(e)=>{this.setState({menuIsOpen: false})}}>About</a></li>
	         <li><a className="smoothscroll menu-link" href="#resume" onClick={(e)=>{this.setState({menuIsOpen: false})}}>Resume</a></li>
            {/* <li><a className="smoothscroll menu-link" href="#portfolio" onClick={(e)=>{this.setState({menuIsOpen: false})}}>WORKS</a></li>
            <li><a className="smoothscroll menu-link" href="#contact" onClick={(e)=>{this.setState({menuIsOpen: false})}}>CONTACT</a></li> */}
           </ul>
        {/* <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a> */}
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        {/* <Portfolio data={this.state.resumeData.portfolio}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
