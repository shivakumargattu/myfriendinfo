import React from 'react'
import "./index.css"

const Protfolio = () => {
  return (
    <div className='ourservies-bg-contener' >
    <h5 className='text small-heading'>Our Works</h5>
    <h1 className='text'>Protfolio</h1>
   
    <div className=' client-card-cantener'>
   

  <div class="">
  <img className='protfolio-card' src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-2.jpg" alt="imge"/>
 
  </div>
  <div class="">
  <img className='protfolio-card' src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-1.jpg" alt="alt"/>
 
  </div>
  <div >
  <img className='protfolio-card' src="https://img.webcodegenie.com/img/protfolio/safarivet.webp?ver=20230608134812" alt="imge"/>
  
  </div>
  <a href='/portfolio'><button className='get-in-btn nobg-btn mb-5 mt-5' > View All</button></a>

    </div>
    </div>
    
  )
}

export default  Protfolio