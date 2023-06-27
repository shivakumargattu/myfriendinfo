import React from 'react'
import "./index.css"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaAngleDoubleRight
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
          
        <div className="form-container">
           
             <div >
             <div className='conatct-details-card '>
                 <div className="contact-info pt-1 pb-0 p-5">
               <h5 className=""><b>Your Benefits!</b></h5>
               <div className='conatct-detali-items-container pt-0'>
                <img className='arow-imge' src="https://img.webcodegenie.com/img/footer/right-arrow.svg" alt="arow"/>
                <p className='space-conat-info-itcons'>Professional Project Consultation</p>
               </div>
               <div className='conatct-detali-items-container pt-0'>  
               <img className='arow-imge' src="https://img.webcodegenie.com/img/footer/right-arrow.svg" alt="arow"/>
            
              <p className="space-conat-info-itcons"> Detailed Project Proposal</p>
              </div>

                 <h5 className=''><b>Sales & Marketing</b></h5>
                 <div className='conatct-detali-items-container pt-0'>  
                 <img className='arow-imge-bottom' size="40" src=" https://img.webcodegenie.com/img/footer/get-in-touch-mail.svg?ver=20230620061009" alt="emali"/>
                 <p className='space-conat-info-itcons'>
                  Sales@myfriendinfo.com
                 </p>
                 </div>

                 <div className='conatct-detali-items-container pt-0'>  
                 <img className='arow-imge-bottom' src=" https://img.webcodegenie.com/img/footer/get-in-touch-call.svg?ver=20230620061009" alt="emali"/>
                 <p className='space-conat-info-itcons'>
                 +91 - 6281 786 602
                 </p>
                 </div>
                
                 <div className='conatct-detali-items-container pt-0'>  
                 <img className='arow-imge-bottom' src=" https://img.webcodegenie.com/img/footer/get-in-touch-mail.svg?ver=20230620061009" alt="emali"/>
                 <p className='space-conat-info-itcons'>
                 contact@myfriend.net.in
                 </p>
                 </div>
              
                 <div className='conatct-detali-items-container pt-0'>  
                 <img className='arow-imge-bottom' src=" https://img.webcodegenie.com/img/footer/sky.svg?ver=20230620061009" alt="emali"/>
                 <p className='space-conat-info-itcons'>
                  info@myfriend.net.in
                 </p>
                 </div>
              
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
