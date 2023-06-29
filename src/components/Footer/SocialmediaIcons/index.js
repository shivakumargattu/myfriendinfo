import React from 'react';
import "./index.css"


const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <div className="logo-container">
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img  alt="inlogo" className='linkedin-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcORShPrezEMJTiLmqyn3RpUmpwmoct2Ho8A&usqp=CAU" />
        
        </a>
      </div>
      <div className="logo-container">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <img alt="youtube"  className='twitter' src='https://th.bing.com/th?id=OIP.3rSTYI2unlM-9raJQJW3lwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2' alt="youtube"/>
        </a>
      </div>
      <div className="logo-container">
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <img alt="twitter" className='twitter' src="data:image/png;base64,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"  />
        </a>
      </div>
      <div className="logo-container">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img className='twitter'  src="https://th.bing.com/th/id/R.5e04fd779e7607a47d0bad14976caa90?rik=MYieavaZpaXrMw&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f02%2fNew-Instagram-logo.jpg&ehk=kTNHOU7RNhSBC8VTl4FPXOmyjXgyJlrNtPiZ9qk03fA%3d&risl=&pid=ImgRaw&r=0" alt="Instagram" />
        </a>
      </div>
      <div className="logo-container">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img className='twitter' src="https://i.pinimg.com/originals/38/9b/14/389b14861f4be0c8d84876b3dda9afc0.jpg" alt='imge' />
        </a>
      </div>
      <div className="logo-container">
        <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
          <img alt="twitter" className='twitter' src="data:image/jpeg;base64,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"/>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
