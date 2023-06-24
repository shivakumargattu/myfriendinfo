import React from 'react'
import "./index.css"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";



const ContactUs = () => {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Do something with the uploaded file
  };

  return (
    <>
        <div className='conatactus'>
           <div>
          <h5 className='small-heading'>GET IN TOUCH</h5>
          <h1 className='text'>Consult With Our Experts Today!</h1>
          </div>
          
        <div className="form-container ">
           
             <div >
             <div className='conatct-details-card'>
                 <div className="contact-info box3">
               <h3><b>Your Benefits!</b></h3>
                  <p>Professional Project Consultation</p>
                  <p>Detailed Project Proposal</p>
                 <h3><b>Sales & Marketing</b></h3>
                 <p>
                 <FaMapMarkerAlt className='icon' /> &nbsp; Address: Visakhapatnam, Andhra Pradesh.
                 </p>
                 <p>
              <FaPhoneAlt  className='icon'/> &nbsp; Phone:+91 - 6281 786 602.
            </p>
            
            <p>
              <FaEnvelope  className='icon'/> &nbsp; Email: contact@myfriend.net.in
            </p>
            <p>
              <FaGlobe  className='icon'/> &nbsp; Website: info@myfriend.net.in
            </p>
                 </div>
             </div>
           </div>

          
         <div className='conatct-froms shadow'>
      
         <form className="my-form">
        
        
        <input type="text" className='input-flids' placeholder='Full Name*' required />
        <br/>
        
      
        <input type="email" id="email" className='input-flids' placeholder="Email*"  name="email" required />
        <br/>
        <input type="file" id="file" className='input-flids' name="file" onChange={handleFileChange} />
        <br/>
      
        <textarea id="message" name="message" placeholder='Message*' required></textarea><br/>

        
        <button type="submit" className='get-in-btn nobg-btn'>Submit</button>
        </form> 
           </div>
           
        </div>
    
        <div className='conatct-froms hiden-card shadow'>
      
      <form className="my-form">
     
     
     <input type="text" className='input-flids' placeholder='Full Name*' required />
     <br/>
     
   
     <input type="email" id="email" className='input-flids' placeholder="Email*"  name="email" required />
     <br/>
     <input type="file" id="file" className='input-flids' name="file" onChange={handleFileChange} />
     <br/>
   
     <textarea id="message" name="message" placeholder='Message*' required></textarea><br/>

     
     <button type="submit" className='get-in-btn nobg-btn'>Submit</button>
     </form> 
        </div>
        </div>
      
    </>
    
  )
}

export default ContactUs
