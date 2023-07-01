import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'

const PortfolioRouter = () => {
  return (
    <>
        <div className='portfolio-cantainer'>
             <h1 className='text'>Portfolio</h1> 
             <h3 className='small-heading'>Bold Ideas, Big Results</h3>
             <p>Our portfolio is a testament to our commitment to excellence and client satisfaction.</p>
           <div className='portfolio-cards'>
               
              <div className="imge-proto-card  m-3 shadow">
              <a href='/vertualreality'>     <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-1.jpg" className="card-img-top" alt="protofloi"/></a>
                   <div className="card-body m-3">
                   <h5><b>App for Virtual Reality</b></h5>
                    <p >DESIGN / IDEAS </p>
                    
                   </div>
               </div>
               

               <div className="imge-proto-card shadow  m-3">
            <a href='/portfolio/coinmobileapp'>       <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-2.jpg" className="card-img-top" alt="protofloi"/></a>
                   <div className="card-body m-3">
                   <h5><b>Mobile Coin View App</b></h5>
                    <p>DEVELOPMENT</p>

                   </div>
               </div>
          


               <div className="imge-proto-card shadow  m-3">
               <a href='/portfolio/ecomerce'>    <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-3.jpg" className="card-img-top" alt="protofloi"/></a>
                   <div className="card-body m-3">
                   <h5><b>Analysis of Security</b></h5>
                    <p>IDEAS / TECHNOLOGY</p>
                   </div>
               </div>
          
             
               <div className="imge-proto-card shadow  m-3">
               <a href='/portfolio/ecomerce'>    <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-4.jpg" className="card-img-top" alt="protofloi"/></a>
                   <div className="card-body m-3">
                   <h5><b>eCommerce Website</b></h5>
                    <p>DESIGN / IDEAS</p>
                   </div>
               </div>
          
               <div className="imge-proto-card shadow  m-3">
             <Link to="/portfolio/response"> 
             <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-6.jpg" className="card-img-top" alt="protofloi"/>
                  
             </Link>
                   <div className="card-body m-3">
                   <h5><b>Responsive Design</b> </h5>
                    <p>DEVELOPMENT / IDEAS</p>
                   </div>
               </div>
            
               <div className="imge-proto-card shadow  m-3">
           <Link to="/portfolio/appforhealth">    <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-5.jpg" className="card-img-top" alt="protofloi"/></Link>
                   <div className="card-body m-3">
                   <h5><b>App for Health</b></h5>
                    <p >DEVELOPMENT</p>
                   </div>
               </div>

               <div className="imge-proto-card shadow  m-3">
             <Link to="/portfolio/socialmedia">      <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-7.jpg" className="card-img-top" alt="protofloi"/></Link>
                   <div className="card-body m-3">
                   <h5><b>Social Media App</b></h5>
                    <p>DESIGN / TECHNOLOGY</p>
                   </div>
               </div>
          

               <div className="imge-proto-card shadow  m-3">
              <Link to="/portfolio/basicproject">    <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-8.jpg" className="card-img-top" alt="protofloi"/></Link> 
                   <div className="card-body m-3">
                   
                   <h5> <b>Basic Project</b></h5>
                    <p>TECHNOLOGY</p>
                   
                    
                   </div>
               </div>
          
              
               <div className="imge-proto-card shadow  m-3">
          <Link to="/protfolio/newreality">         <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-9.jpg" className="card-img-top" alt="protofloi"/></Link>
                   <div className="card-body m-3">
                    <h5><b>Your New Reality</b></h5>
                    <p>DESIGN / TECHNOLOGY</p>
                   </div>
               </div>
          

               <div className="imge-proto-card shadow  m-3">
          <Link to="/protfolio/analysis">         <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-10.jpg" className="card-img-top" alt="protofloi"/></Link>
                   <div className="card-body m-3">
                    <h5><b>Analysis of Security</b></h5>
                    <p>DESIGN / DEVELOPMENT</p>
                   </div>
               </div>
          

               <div className="imge-proto-card shadow  m-3">
          <Link to="/protfolio/crypto">         <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-12.jpg" className="card-img-top" alt="protofloi"/></Link>
                   <div className="card-body m-3">
                    <h5><b>Crypto App Project</b></h5>
                    <p>TECHNOLOGY /DEVELOPMENT</p>
                   </div>
               </div>
          


          
           </div>
        </div>
    </>
  )
}

export default PortfolioRouter
