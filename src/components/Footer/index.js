import React from "react";
import "./index.css";


import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import SocialMediaIcons from "./SocialmediaIcons";

const Footer = () => {
  return (
    <section className="footer">
    
      <div className="top-footer-container">
         <div className="top-footer">
           <img className="logo-imge" alt="imge" src=" https://myfriend.net.in/wp-content/uploads/2020/09/MFIS.png"/>
           <div className="compynes-logos">
           
           </div> 
         </div>
      </div>
      <hr/>

        <div className="middle-footer">
    
                 <div className="footer-subHeading m-2">
                  <h3 className="header-footer">India</h3>
                  <div className="footer-text-container">
                  <p> <FaMapMarkerAlt/>&nbsp; Visakhapatnam, Andhra Pradesh</p>
                  <p className="active"><FaPhoneAlt/>&nbsp;+91 - 6281 786 602 </p>
                 </div>
                 </div>


              <div className="footer-subHeading m-2">
                  <h3 className="header-footer">Services</h3>
                 <div className=" footer-service">
                  <div className="footer-text-container">
                <a className="link-footers" href="/service/webdevlopment">  <p className="active ">Web Development</p></a>
               <a className="link-footers" href="/mobiledevelopment"> <p className="active">Mobile Development</p> </a>
               <a className="link-footers" href="/webdesign">   <p className="active">Web Design</p> </a>
                <a className="link-footers" href="/softwaretesing">    <p className="active">Software Testing</p></a>
                <a className="link-footers" href="/digitalmarketing"> <p className="active">Digital Marketing </p> </a>
                 </div>
                </div>             
               </div>



               <div className="footer-subHeading m-2">
        <h3 className="header-footer">Contact Us</h3>
          <div className="footer-service">
          <div className="footer-text-container">  
            <p>
              <FaMapMarkerAlt /> &nbsp; Visakhapatnam, Andhra Pradesh.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; +91 - 6281 786 602.
            </p>
            
            <p>
              <FaEnvelope /> &nbsp; contact@myfriend.net.in
            </p>
            <p>
              <FaGlobe /> &nbsp; info@myfriend.net.in
            </p>
          </div>
          </div>
          </div> 
       
          <div className="footer-subHeading m-2">
                  <h3 className="header-footer">Subscribe</h3>
                 <div className=" footer-service">
                  <div className="footer-text-container">
                  <p className="active ">Follow our newsletter to stay <br/> updated about agency.</p>
                 </div>
                </div>             
               </div>

                 

       </div>
       <hr/>
       <div className=" " >
       <div className="bottom-footer-copyriht">
       <p>Copyright © 2023 My Friend Info Solutions Private Limited</p>
       <p>Privacy Policy |
 Terms and Conditions 
</p>
</div>
       <div className="bottom-content">
      
<SocialMediaIcons/>
</div>
       </div>
      
    </section>
  );
};

export default Footer;
