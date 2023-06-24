import React from 'react'
import "./index.css"

const ConatctUsRouter = () => {
    
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Do something with the uploaded file
  };
  return (
    <>
    <div className='bg-color'>
        <div className='bg-conatiner-cantactus'>
           <h1 className='text'>Contact Us</h1>
           <h5 className='small-heading'>Your Business, Our Passion!</h5>
          <p>The next step towards success is just a message away. Contact us and let's make it happen</p>
        </div>

        <div className='conatct-deyacls-cards'>
              <div className='d-flex'>
        <div>
    <h3><b>Trusted By</b></h3>
  
     <div className='conatct-card-brands'>
      <div class=" logo-cantainer-logo shadow">
        <img className='logo-imges' alt='logos' src="https://img.webcodegenie.com/img/home/our-clients/safari.webp?ver=20230616140825"/>
      </div>
     
      <div class=" logo-cantainer-logo shadow">
         <img className='logo-imges' alt='logos' src="https://img.webcodegenie.com/img/home/our-clients/savein.webp?ver=20230616140825"/>
      </div>
     
      <div class=" logo-cantainer-logo shadow">
        <img className='logo-imges' alt='logos' src="https://img.webcodegenie.com/img/home/our-clients/gomow.webp?ver=20230616140825"/>
      </div>
     
      <div class=" logo-cantainer-logo shadow">
         <img className='logo-imges' alt='logos' src="https://img.webcodegenie.com/img/home/our-clients/fire-view.webp?ver=20230616140825"/>
      </div>


      <div class=" logo-cantainer-logo shadow">
        <img className='logo-imges' alt='logos' src="https://logos-download.com/wp-content/uploads/2019/01/SK-group_Logo.png"/>
      </div>
     
      <div class=" logo-cantainer-logo shadow">
         <img className='logo-imges' alt='logos' src="https://cdn.dribbble.com/users/372006/screenshots/2284306/meno-logo-transparent-hd-loopgg.gif"/>
      </div>
    
     
      <div class=" logo-cantainer-logo shadow">
        <img className='logo-imges' alt='logos' src="https://yt3.ggpht.com/a/AATXAJwmbTPFCaUYPqTPUUO2_1xCxz0p-de1IWWjwA=s900-c-k-c0xffffffff-no-rj-mo"/>
      </div>
     
      <div class=" logo-cantainer-logo shadow">
         <img className='logo-imges' alt='logos' src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_64398681-e1492449982668.jpg?auto=format&q=60&fit=max&w=930"/>
      </div>


      <div class=" logo-cantainer-logo shadow">
        <img className='logo-imges' alt='logos' src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_67776077-e1492455657508.png?auto=format&q=60&fit=max&w=930"/>
      </div>
     
      <div class=" logo-cantainer-logo shadow">
         <img className='logo-imges' alt='logos' src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_79397237-e1492457556172.png?auto=format&q=60&fit=max&w=930"/>
      </div>
      </div>
  
    
    </div>  

              </div>
              <div className=' cards-fomms shadow'>
         <form className="my-form-conat">
          <input type="text" className='input-flids' placeholder='Full Name*' required />
          <br/>
          <input type="email" id="email" className='input-flids' placeholder="Email*"  name="email" required />
          <br/>
          <input type="number" id="phone" className='input-flids' placeholder="Phnoe Number*"  name="phone" required />
          <br/>
          <input type="file" id="file" className='input-flids' name="file" onChange={handleFileChange} />
          <br/>
          <textarea id="message" name="message" placeholder='Message*' className='text-area' required></textarea><br/>
          <button type="submit" className='get-in-btn nobg-btn'>Submit</button>
        </form> 
              </div>

        </div> 




       </div> 
    </>
  )
}

export default ConatctUsRouter
