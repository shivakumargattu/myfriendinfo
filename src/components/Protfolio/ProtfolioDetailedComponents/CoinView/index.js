import React from 'react'
import "./index.css"
import CoinViewCarosuel from './CoinViewCarosel'


const CoinView = () => {
  return (
  <>
       <div className=' pb-2 mt-4 p-5'>
        <CoinViewCarosuel/>
            
              <div className='vertual-reactlty-top-cantiner'>
                <img className='virtual-imge' alt='coin' src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-2.jpg"/>
                <div className='vitual-container'>
                <h1><b>How it Works</b></h1>
                    <p>Mobile apps have already penetrated every sphere of our lives and every imaginable business niche. Naturally, the appeal of mobile apps for its market potential cannot fade away anytime soon, at least until another great technology can replace mobile apps. development company and its business clients. . So, what about the failure of other apps? What are the key factors responsible for the failure of millions of apps?

                   </p>
                  <p>Front-end development essentially focuses and works on the visual perceptions of a website. It’s about the look, load time, pattern and functionality of the components of a website. Front-End is a mix of programming and layout that powers the visuals and interactions on the web. 

                     </p>
                 </div>
                 </div>

            

                 <div>
                  <h1><b>Related Projects</b></h1>
                  <div className='related-project-container'>

                   <div className="flip-card">
                   <div className="flip-card-inner">
                  <div className="flip-card-front">
                  <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-8.jpg" className='w-100 h-100' alt="Avatar" />
                 </div>
                   <div className="flip-card-back">
                   <h1>Basic Project</h1>
                   <p>Design / Development</p>
               
                  </div>
                 </div>
                   </div>
                   
                   <div className="flip-card">
                   <div className="flip-card-inner">
                  <div className="flip-card-front">
                  <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-11.jpg" className='w-100 h-100' alt="Avatar" />
                 </div>
                   <div className="flip-card-back">
                   <h1>Corporate website</h1>
                   <p> Development</p>
               
                  </div>
                 </div>
                   </div>

                   <div className="flip-card">
                   <div className="flip-card-inner">
                  <div className="flip-card-front">
                  <img src="https://myfriend.net.in/wp-content/uploads/2019/11/project-details-6.jpg" className='w-100 h-100' alt="Avatar" />
                 </div>
                   <div className="flip-card-back">
                   <h1>Responsive Design
</h1>
                   <p> Development/ Idea</p>
               
                  </div>
                 </div>
                   </div>



                  </div>
                  
                 </div>

       </div>
  </>
     )
}

export default CoinView
