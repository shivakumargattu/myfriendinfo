import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {BsCodeSquare} from "react-icons/bs"
import {BiLogoPhp} from "react-icons/bi"
import {FaLaptopCode,FaAngular,FaReact,FaAppStoreIos,FaPhp,FaSwift,FaNodeJs ,FaLaravel,FaDigitalTachograph,} from "react-icons/fa"
import {CiMobile2} from "react-icons/ci"
import {AiOutlineFileSearch,AiFillProfile,AiOutlineRight} from "react-icons/ai"
import {RiCustomerService2Line} from "react-icons/ri"
import {FaBars} from "react-icons/fa"
import {SiJavascript,SiMongodb,SiBackbonedotjs,SiCakephp,SiRedis,SiWordpress,SiFlutter,SiExpress} from "react-icons/si"
import {TfiWrite} from "react-icons/tfi"
import {FcAbout,FcAndroidOs} from "react-icons/fc"
import {MdOutlineWorkOutline,MdOutlineCelebration} from "react-icons/md"
import {RxCross2} from "react-icons/rx"
import {TbBrandReactNative,TbBrandMysql} from "react-icons/tb"


import "./index.css"

const Header = () => {
    
  
   const [isMobile,setIsMobile]=useState(false)
   
   const [isSubmenuItems,setSubmenuItems]=useState(false)
   const [isTechnologie,setTechnologie]=useState(false)
   const [isResources,setResources]=useState(false)
   const [isCOmpany,setCompany]=useState(false)

  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);


  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  }
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    }
  
    const toggleDropdown2 = () => {
      setShowDropdown2(!showDropdown2);
    }
  
    const toggleDropdown3 = () => {
      setShowDropdown3(!showDropdown3);
    }
  
const showManu=()=>{
  setIsMobile(!isMobile)
}

const smallDivicMenuSubItems =()=>{
  setSubmenuItems(!isSubmenuItems)
}
const technologiesSmallDive=()=>{
  setTechnologie(!isTechnologie)
}

const resourceSmallDive=()=>{
setResources(!isResources)
}

const companySmallDiveces=()=>{
  setCompany(!isCOmpany)
}

  return (<>
    <div>    
    <div className='large-divice-nav'>

      <nav className='main-header.fixed-header shadow nav-container nav-container-bar'>
      <div className='logo-nav-content '>
      <a href="/">
        <img className='logo-imge-nav ' alt="logo" src="https://myfriend.net.in/wp-content/uploads/2020/09/MFIS.png"/>
        </a>
      </div>
      <ul className='nav-items list-content'> 
    
        <li className= "list active" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}
        >
        SERVICES
        {showDropdown && <Services />}

        </li>  
        
        <li  className= "list active" onMouseEnter={toggleDropdown1} onMouseLeave={toggleDropdown1} > 
        TECHNOLOGY
        {showDropdown1 && <Technologies/>}
      </li>
      <li className= "list active">
      INDUSTRIES
      </li>
      

        <li className= "list active"onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>
        
        
        RESOURCES
        {showDropdown2 && <Resources/>}
        </li>
       
        <li className= "list active"onMouseEnter={toggleDropdown3} onMouseLeave={toggleDropdown3}>
      COMPANY
      {showDropdown3 && <Company/>}
        
        </li>
        <li className= "list blog-text-heading active">
            
      <Link className='blog-text-heading active' to="/blog">
        BLOGS
        </Link>
        </li>
        
      </ul>
      
      <div className='getin-btn'>
       <a href='contactus'> <button className='get-in-btn nobg-btn'>Contact Us</button></a>
      </div>
    


         </nav>
    </div>



      <div >

       <div className='samll-divices'>
    
       <a href="/">
        <img className='logo-imge-nav ' alt="logo" src="https://myfriend.net.in/wp-content/uploads/2020/09/MFIS.png"/>
        </a>
      <button onClick={showManu} className='mobile-menu-icon'>
      {isMobile? <RxCross2 size={30}/>: <FaBars size={30}/>  }
      </button>
    </div>
    
    {isMobile && <ul className='nav-items  list-content'> 
<div className='menu-card-items'>
    <div className='samll-dives-menu'>
    
    <li className= "list active" 
    >
    <div className='small-sub-icon' onClick={smallDivicMenuSubItems}>
    SERVICES 
    <AiOutlineRight size={20}/>
    

    </div>
    {isSubmenuItems && <div className='submenu-service-card'>
      <a className="nav-link-subMenu-Items" href="/service/webdevlopment">  <p className="active "> -Web Development</p></a>
     <a className="nav-link-subMenu-Items"  href="/mobiledevelopment"> <p className="active" color='black'>-Mobile Development</p> </a>
        <a className="nav-link-subMenu-Items" href="/webdesign">   <p className="active">-Web Design</p> </a>
        <a className="nav-link-subMenu-Items" href="/softwaretesing">    <p className="active">-Software Testing</p></a>
        <a className="nav-link-subMenu-Items" href="/digitalmarketing"> <p className="active">-Digital Marketing </p> </a>
                
    </div>}

    
    
    

    </li>  
    
    <li  className= "list active "  >
    <div className='small-sub-icon' /*onClick={technologiesSmallDive} */ >
    
    TECHNOLOGY
    <AiOutlineRight size={20}/>
  
    </div>
    {isTechnologie && <div>
      <h1>prashnath</h1>
    </div>}
  </li>


    <li className= "list active">
    
    <div className='small-sub-icon' onClick={resourceSmallDive}>
    
    RESOURCES
  <AiOutlineRight size={20}/>

    </div>
{isResources&&<div>
  
  <a className="nav-link-subMenu-Items" href="/portfolio">    <p className="active">-Portfolio</p></a>
  <a className="nav-link-subMenu-Items" href="/blog">    <p className="active">-Blogs</p></a>
  <a className="nav-link-subMenu-Items" href="/testimoneal">    <p className="active">-Testimonials</p></a>
        
        
        


</div>}
    </li>
   
    <li className= "list active">
    <div className='small-sub-icon' onClick={companySmallDiveces}>  COMPANY
  <AiOutlineRight size={20}/>
    </div>
   {isCOmpany && <div>
    
    <a className="nav-link-subMenu-Items" href="/aboutus">    <p className="active">-About Us</p></a>
    <a className="nav-link-subMenu-Items" href="/career">    <p className="active"> -Careers</p></a>
    <a className="nav-link-subMenu-Items" href="/contactus">    <p className="active">-Contact Us</p></a>
        
        
        

   </div>}
    </li>
    <li className= "list blog-text-heading active">
        
  <Link className='blog-text-heading active' to="/blog">
    BLOGS
    </Link>
    </li>
    
    <div className='getin-btn'>
       <a href='contactus'> <button className='get-in-btn nobg-btn'>Contact Us</button></a>
      </div>
    </div>
</div>
    </ul>
  }

     </div>

      </div>
     
     </>
  )
};







////* Services card Componet*//// 
const Services = () => {
  return (<>
  
  <div className="service-card  ">
       <div className='service-sestion'>
        <div className= 'item d-flex m-3 active-conatiner'>
          <BsCodeSquare className='icon'/>
          <div>
          <Link className='blog-text-heading active' to="/service/webdevlopment"> <h1 className='sub-heading-service  active'>Web development</h1></Link>
             </div>
        </div>
        
        <div className= 'item d-flex m-3 active-conatiner'>
          <FaLaptopCode className='icon'/>
          <div>
        <Link className='blog-text-heading active' to="/webdesign">   <h1 className='sub-heading-service active'>Web Design</h1> </Link>
         
          </div>
        </div>
        
        <div className= 'item d-flex m-3 active-conatiner'>
          <FaDigitalTachograph className='icon'/>
          <div>
          <Link to="/digitalmarketing" className='blog-text-heading active' > <h1 className='sub-heading-service active'>Digital Marketing</h1></Link>
                     </div>
        </div>
        
    </div>
   
    <div className='service-sestion'>
        <div className= 'item d-flex m-2 active-conatiner'>
          <CiMobile2 className='icon'/>
          <div>
         <Link to="/mobiledevelopment" className='blog-text-heading  active'>  <h1 className='sub-heading-service active'>Mobile App development</h1></Link>
           
          </div>
        </div>
        
        <div className= 'item d-flex m-3 active-conatiner'>
          <AiOutlineFileSearch className='icon'/>
          <div>
          <Link to="/softwaretesing" className='blog-text-heading active'> <h1 className='sub-heading-service active'>Software Testing</h1></Link>
                     </div>
        </div>
        
        

    </div>
 


  </div>

</>)};

////* Technologie card Componet*/////

 const Technologies=()=>{
  return(
    <>
      <div className='technologies-cards'>
        <div className='technologie-item pt-3'>

          {/*   Frontend Technologies */}

               <div className= 'item d-flex '>
                  <div className='d-flex'>
                    <img src="https://img.webcodegenie.com/img/header/tech-frontend.svg?ver=20230705113813"  alt="adv" className='icon'/>
                    <div>
                 <h1  className='tech-sub-heading mb-4'>Frontend</h1> 
                 <Link to='/angular' className='text-decoret'> <p className='tech-sub-description active'> <FaAngular color='red' size={25}/> Angular </p></Link>
                 <Link to="/reactjs" className='text-decoret'>     <p className='tech-sub-description active'><FaReact color='slateblue' className='icons-space' size={26}/>ReactJs</p></Link>
                 <Link to="/javascript" className='text-decoret'> <p className='tech-sub-description active'> <SiJavascript color='yellow' className='icons-space' size={26}/> JavaScript</p></Link>
                 <Link to="/backbonejs" className='text-decoret'>    <p className='tech-sub-description active'> <SiBackbonedotjs color='' className='icons-space' size={26}/>Backbone Js</p></Link>
                     </div>
                 </div>
                </div>
       
         {/*   Backend Technologies */}

         <div className= 'item d-flex '>
                  <div className='d-flex'>
                    <img src="https://img.webcodegenie.com/img/header/tech-backend.svg?ver=20230705113813"  alt="iwhd" className='icon'/>
                    <div>
                      <h1  className='tech-sub-heading mb-4'>Backend</h1>
                      <p className='tech-sub-description active'><FaPhp color='' className='icons-space' size={26}/>PHP</p>
                      <p className='tech-sub-description active'><FaNodeJs color='green' className='icons-space' size={26}/> NodeJs</p>
                      <p className='tech-sub-description active'><FaLaravel color='red' className='icons-space' size={26}/> Laravel</p>
                      <p className='tech-sub-description w-100 active'><SiCakephp color='red' className='icons-space' size={16}/> CackePHP</p>
                      <p className='tech-sub-description active'><SiExpress color='green' className='icons-space' /> Express</p>
                     </div>
                 </div>
                </div>

          {/*   Mobile Technologies */}
          
          <div className= 'item d-flex '>
                  <div className='d-flex'>
                    <img src="https://img.webcodegenie.com/img/header/tech-mobile.svg?ver=20230705113813" alt="imh" className='icon'/>
                    <div>
                      <h1  className='tech-sub-heading w-100 mb-4'>Mobile App</h1>
                      <p className='tech-sub-description active'> <FcAndroidOs color='green' size={25} className='icons-space' /> Android</p>
                      <p className='tech-sub-description active'> <FaAppStoreIos color='blue' size={25} className='icons-space' /> iOS</p>
                      <p className='tech-sub-description w-100 active'> <TbBrandReactNative color='#00ffff' size={16} className='icons-space' /> ReactNative</p>
                      <p className='tech-sub-description active'><SiFlutter color='#b74093' size={23} className='icons-space' /> Flutter</p>
                      <p className='tech-sub-description active'><FaSwift color='orange' size={25} className='icons-space' /> Swift</p>
                     </div>
                 </div>
                </div>
   {/*   CMS & Database */}
          
             <div className='d-flex flex-column'>
              <div className= 'item d-flex '>
                   <div>
                     <div className='d-flex'>
                     <img src="https://img.webcodegenie.com/img/header/tech-db.svg?ver=20230705113813" alt="imdh" className='icon'/>
                     
                       <div>
                        <h1  className='tech-sub-heading mb-4'>  Database</h1>
                        <p className='tech-sub-description active'> <TbBrandMysql color='green' size={25} className='icons-space' /> MySQL</p>
                        <p className='tech-sub-description w-100 active'>  <SiMongodb color='green' size={22} className='icons-space' /> MongoDB</p>
                        <p className='tech-sub-description active'> <SiRedis color='#A41E11' size={25} className='icons-space' /> Redis</p>
                       </div>
                     </div>
                    </div>
               </div>
               <div>
               <div className= 'item d-flex '>
                   <div>
                     <div className='d-flex'>
                     <img src="https://img.webcodegenie.com/img/header/tech-cms.svg?ver=20230705113813" alt="imh" className='icon'/>
                      
                       <div>
                        <h1  className='tech-sub-heading mb-3'>CMS</h1>
                        <p className='tech-sub-description w-100 ml-0 mb-0 mt-0 m-1 active'> <SiWordpress color='444c38'  className='icons-space' /> Wordpress</p>
                       </div>
                     </div>
                    </div>
                    </div> 
               </div>
             
             </div> 

         </div>
      </div>
    </>
  )
 }


/////* Company  card Componet *////

 const Company=()=>{
  return(
    <>
    <div className='resources-card '>  
    
      
     <div>

     <div className= 'item d-flex'>
      <FcAbout className='icon'/>
        <div>
   <Link to="/aboutus" className='blog-text-heading active'>      <h1 className='resourse-sub-heading  active'>About us</h1> </Link>
             <p className='resourse-description'> 
             
Our collaborative approach ensures a seamless and successful digital journey for our clients.

</p>
   </div>
</div>

<div className= 'item d-flex'>
  <MdOutlineWorkOutline className='icon'/>
   <div>
 <Link to="/career" className='blog-text-heading active'>  <h1 className='resourse-sub-heading active'>Careers</h1></Link>
    <p className='resourse-description'> 
    
Take your career to the next level and join us on the forefront of digital innovation.</p>
   </div>
</div>
</div>  



<div className= 'item d-flex'>
  <RiCustomerService2Line className='icon'/>
   <div>
 <Link to="/contactus" className='blog-text-heading active'>  <h1 className='resourse-sub-heading active'>Contact us</h1> </Link>
    <p className='resourse-description'> 
    
    
Let's start a conversation about how we can bring your digital vision to life - reach out to us today..</p>
   </div>
          </div>
           
          
          </div>   
          
   

  
    </>
  )
 }

 /////* Resoureces card Componet *////
 const Resources=()=>{
  return(
    <>
    <div className='resources-card'>    
     <div  >

     <div className= 'item d-flex'>
      <AiFillProfile className='icon'/>
        <div>
       <Link to="/portfolio" className='blog-text-heading active'>  <h1 className='resourse-sub-heading active'>Portfolio</h1> </Link>
             <p className='resourse-description'> 
             
Explore our collection: Inspiring web and mobile apps development for modern businesses.</p>
   </div>
</div>

<div className= 'item d-flex'>
  <TfiWrite className='icon'/>
   <div>
 <a href="/blog" className='text-decoret'>  <h1 className='resourse-sub-heading active'> Blogs</h1></a>
    <p className='resourse-description'> 
        Stay ahead of the game with our expert Insights on web and mobile app development.</p>
   </div>
</div>
</div>  

<div  >

{/* <div className= 'item d-flex'>
  <AiOutlineFileSearch className='icon'/>
   <div>
   <h1 className='resourse-sub-heading'>Case Studies</h1>
    <p className='resourse-description'> 
    
Discover how we achieved results for our Clients in web and mobile app development.</p>
   </div>
          </div> */}
           <div>
<div className= 'item d-flex'>
  <MdOutlineCelebration className='icon'/>
   <div>
 <Link to="/testimoneal" className='blog-text-heading active'>  <h1 className='resourse-sub-heading active'>Testimonials</h1> </Link>
    <p className='resourse-description'> 
    
Don't just take our word for it - see what our clients have to say about our top-notch development work.</p>
   </div>
    </div>

          </div>
          </div>

  </div>
    </>
  )
 }

export default Header