import React, { Component } from 'react';
import ReactPDF, { BlobProvider, Document } from '@react-pdf/renderer';
import { CVDoc, CVFrontpage } from "../cv/CVDoc"
import CVView from "../cv/CVView";
 
class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var my_name = this.props.data.address.my_name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about" >
         <div>
      <div className="row text-center">
         {/* <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Nordic Giant Profile Pic" data-aos="fade-right" data-aos-duration="1000" />
         </div> */}
         
          
               <div className="text-justify">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{my_name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
                  <div className="" style={{marginLeft: "20px", marginRight: "20px"}}>
                 {/* <CVView></CVView> */}
                                    
                     <a href={"/Martin_C_Dammrath_Software_Developer.pdf"} target={"_blank"} className="button" style={{background: "#444444"}}><i className="fa fa-download "></i> Download Resume</a>
                  
                  
               </div>
               </div>
               
              

           
         
      </div>
      </div>
      
   </section>
    );
  }
}

export default About;
