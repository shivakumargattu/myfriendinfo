import React,{useState} from 'react'
import "./index.css"

import {AiFillFileText} from "react-icons/ai"


const ConatctUsRouter = () => {

        const [selectedFile, setSelectedFile] = useState(null);
        const [imageUrl, setImageUrl] = useState('');
        const [showImage, setShowImage] = useState(false);
      
        const handleFileChange = (event) => {
          setSelectedFile(event.target.files[0]);
          setShowImage(false);
        };
      
        const handleImageUrlChange = (event) => {
          setImageUrl(event.target.value);
          setShowImage(true);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Handle form submission with the selected file or image URL
          if (selectedFile) {
            console.log('Selected file:', selectedFile);
            // Add your logic here to process the file or send it to the server
          } else if (imageUrl) {
            console.log('Image URL:', imageUrl);
            // Add your logic here to handle the image URL
          }
        };
      


    
  {/*const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file); // Do something with the uploaded file
  };*/}
  return (
    <>
    <div className='bg-color'>

        <div className='bg-conatiner-cantactus'>
           <h1 className='text'>Contact Us</h1>
           <h5 className='small-heading'>Your Business, Our Passion!</h5>
          <p>The next step towards success is just a message away. Contact us and let's make it happen</p>
        </div>

<h1>Trusted By</h1>

        <div className='conatct-deyacls-cards '>

               
  
                 <div className='cards-brand-logos '>
                
                 <div class=" logo-cantainer-logo shadow">
        <img className='logo-imges' alt='logos' src="https://img.webcodegenie.com/img/home/our-clients/safari.webp?ver=20230616140825"/>
                 </div >
     
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

        {  /*       <div className=' cards-fomms  shadow'>
         <form className="my-form-conat">
          <input type="text" className='input-flids' placeholder='Full Name*' required />
          <br/>
          <input type="email" id="email" className='input-flids' placeholder="Email*"  name="email" required />
          <br/>
          <input type="number" id="phone" className='input-flids' placeholder="Phnoe Number*"  name="phone" required />
          <br/>
          <input type="file" id="file" className='input-flids' name="file" onChange={handleFileChange} />
          <br/>
          <textarea id="message" name="message" placeholder='Message*' className='text-area w-90 ' required></textarea><br/>
          <button type="submit" className='get-in-btn nobg-btn'>Submit</button>
        </form> 
                </div>*/}

       
                <div className='conatct-froms-router  shadow'>
      
      <form className="my-form">
     
     
     <input type="text" className='input-flids' placeholder='   Full Name*' required />
     <br/>
     
   
     <input type="email" id="email" className='input-flids' placeholder="   Email*"  name="email" required />

     <br/>
     <input type="number" id="phone" className='input-flids' placeholder="   Phnoe Number*"  name="phone" required />
  <br/>
    
     <textarea id="message" name="message" placeholder=' Message*' required></textarea>

     <br/>
     <label className='input-flids' htmlFor="fileInput">
     {selectedFile ? (
       <span>: {selectedFile.name}</span>
     ) : (
       <span className=''> <AiFillFileText/> Attach a file</span>
     )}
     <input
       type="file"
       id="fileInput"
       onChange={handleFileChange}
       accept=".txt, .pdf, .doc"
       style={{ display: 'none' }}
       placeholder='   Attach File'
     />
   </label>
   <br/>
    {/* <input type="file" id="file" className='input-flids' name="  file" onChange={handleFileChange} />
     <br/>*/}
   
     
     <button type="submit" className='get-in-btn nobg-btn'>Submit</button>
     </form> 
        </div>

                 </div>
 

 {/* fomem*/}


          </div>  

              


            {/*  <div className=' cards-fomms shadow'>
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
              </div>*/}

        




      
    </>
  )
}

export default ConatctUsRouter
