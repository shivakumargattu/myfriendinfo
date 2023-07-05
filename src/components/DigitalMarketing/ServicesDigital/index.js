import React, { useState } from 'react';
import "./index.css"

const Component1=()=>{
  return(
    <>
    <div className=''>
      <h4 className='pt-3'><b>Search Engine Optimization(SEO) </b></h4>
      <img className='m-4' src="https://img.webcodegenie.com/img/services/digital-marketing/search-engine-optimization.svg?ver=20230620061009" alt="imge"/>
      <p className='service-incled-description'>
      Our SEO strategies propel your website to the top of search engine rankings. We conduct comprehensive keyword research, optimize your website's structure and content, and implement proven on-page and off-page techniques. By improving your visibility on search engines, we drive targeted organic traffic to your site, helping you reach your audience and increase conversions.
      <p>Moz’s Q&A Forum, powered by our community of 500,000+ digital marketers, offers hundreds of thousands of SEO questions and answers from people just like you. Join the community and ask your own question, or browse discussions on everything from the Moz tools to other areas of marketing</p>
       </p>
    
      </div>
      
    </>
  )
}

const Component2=()=>{
  return(
    <>
       
       <div className=''>
      <h4 className='pt-3'><b>Content Marketing </b></h4>
      <img className='m-4' src="https://img.webcodegenie.com/img/services/digital-marketing/content-marketing.svg?ver=20230620061009" alt="imge"/>
      <p className='service-incled-description'>
      We create and distribute valuable content to attract, engage, and convert your target audience. Our content marketing specialists develop a comprehensive strategy tailored to your brand, crafting informative blog posts, captivating videos, and visually appealing infographics. By establishing thought leadership and addressing your audience's pain points, we drive organic traffic, enhance brand credibility, and increase customer engagement. <br/>
      Content marketing is a strategic marketing approach focused on creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action.
</p>
    
      </div>

    </>
  )
}

const Component3=()=>{
  return(
    <>   

 <div className=''>
      <h4 className='pt-3'><b>Pay Per Click (PPC) Marketing </b></h4>
      <img className='m-4' src="https://img.webcodegenie.com/img/services/digital-marketing/ppc-advertising.svg?ver=20230620061009" alt="imge"/>
      <p className='service-incled-description'>
      With our strategic PPC campaigns, we target the right audience at the right time. We conduct thorough keyword analysis, create compelling ad copies, and optimize bidding strategies to maximize your ad's visibility and ROI. By leveraging platforms like Google Ads, we generate immediate visibility and drive quality traffic to your website, ensuring maximum returns on your advertising investment.


</p>
    
      </div>
    </>
  )
}

const Component4=()=>{
  return(
    <>
     
 <div className=''>
      <h4 className='pt-3'><b>Social Media Marketing
 </b></h4>
      <img src="https://img.webcodegenie.com/img/services/digital-marketing/social-media-marketing.svg?ver=20230620061009" alt="imge"/>
       <p className='service-incled-description'>
        Engage and connect with your audience on popular social media platforms. Our social media experts develop tailored strategies, create engaging content, and manage your profiles to build brand awareness and foster meaningful interactions. By leveraging platforms such as Facebook, Instagram, Twitter, and LinkedIn, we help you connect with your target audience, drive engagement, and ultimately boost conversions.
       </p>
    
      </div>
    </>
  )
}

const Component5=()=>{
  return(
    <>
     
 <div className=''>
      <h4 className='pt-3'><b>Branding</b></h4>
      <img className='m-4' src="https://img.webcodegenie.com/img/services/digital-marketing/social-media-marketing.svg?ver=20230620061009" alt="imge"/>
       <p className='service-incled-description'>
       Our branding services are designed to help your business stand out in a competitive market, leaving a lasting impression on your target audience.
We take a comprehensive approach to branding, starting with in-depth market research and competitor analysis to identify unique opportunities for your brand.
Our team of experienced branding experts works closely with you to develop a brand strategy that aligns with your business goals and resonates with your target market.
We bring your brand to life visually, creating a distinctive logo, color palette, and visual elements that reflect your brand's personality and appeal to your audience.
Our branding services extend beyond visuals – we also help you craft a compelling brand positioning and messaging strategy to communicate your value proposition effectively.
We ensure consistency across all brand touchpoints, including your website, social media profiles, marketing materials, and packaging, to create a cohesive brand presence.
       </p>
    
      </div>
    </>
  )
}





const FirstCard = ({ components, handleButtonClick }) => {
  const buttons = ['Search Engine Optimization(SEO)', ' Content Marketing', 'Pay Per Click (PPC) Marketing', 'Social Media Marketing',"Branding" ];

  return (
    <div className='constamized-components shadow w-50'>
      {buttons.map((button, index) => (
        <h6 className='p-3' key={index} onClick={() => handleButtonClick(index)}>
        <b>  {button}</b>
        </h6>
      ))}
    </div>
  );
};

const SecondCard = ({ activeComponent }) => {
  return (
    <div className=' second-card-cainter background-color-testing shadow w-55'>
      
      {activeComponent}
    </div>
  );
};

const ServicesDigital = () => {



  const components = [
    <Component1 />,
    <Component2 />,
    <Component3 />,
    <Component4 />,
    <Component5 />
    
  ];
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <>
    <div className='conatiner-testing-card '>
      <FirstCard components={components} handleButtonClick={handleButtonClick} />
      <SecondCard activeComponent={components[activeButton]} />
    </div>

    <div className='small-conatiner-testing-card'>
      <FirstCard components={components} handleButtonClick={handleButtonClick} />
      <SecondCard activeComponent={components[activeButton]} />
    </div>
    

    </> );

};

export default ServicesDigital;
