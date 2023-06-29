import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"


const Blog = () => {
  return (
  <>
        <div className="bg-blog-container">
          <h1 className='text'>Blogs</h1>
          <h5 className='small-heading'>Explore the Latest Trends</h5>
          <p>Stay ahead of the game with our expert insights on website and mobile app development.</p>
            <div className='blogs-container'>


                <div className='blogos-card'>
                    <img src="https://myfriend.net.in/wp-content/uploads/2019/11/blog4.jpg" className='imge-blog' alt="Avatar" />
                    <div class="p-4">
                    <div className='blog-posted-date'>
                    <h5 className='blog-text'>Blog Article</h5>
                    <div className='date-details'>
                          <h6>Jun 28 2023</h6>
                          <p><b>4 mints ago</b></p>
                        </div>
                    </div>
                    
                    <h5>Plan Your Project with Your Software</h5>
                    <div className='blog-posted'>
                        {/* <div className='d-flex'>
                      <div className='logo-blog2'>
                      
                      </div>
                      <div className='m-2'>
                      <h4 >Anil Kumar</h4>
                      <p>Co-Founder </p>
                      </div>
                          </div>  */}
                          <p>The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating...</p>
                  <Link to="/blog/blog1">     <button>Read More</button> </Link>
                        
                    </div>
                     </div>
                </div>


               
               
                <div className='blogos-card'>
                    <img src="https://myfriend.net.in/wp-content/uploads/2019/11/blog1.jpg" className='imge-blog' alt="Avatar" />
                    <div class="p-4">
                    <div className='blog-posted-date'>
                    <h5 className='blog-text'>Blog Article</h5>
                    <div className='date-details'>
                          <h6>Jun 18 2023</h6>
                          <p><b>4 mints ago</b></p>
                        </div>
                    </div>
                    
                    <h5>You have a Great Business Idea?</h5>
                    <div className='blog-posted'>
                        {/* <div className='d-flex'>
                      <div className='logo-blog2'>
                      
                      </div>
                      <div className='m-2'>
                      <h4 >Anil Kumar</h4>
                      <p>Co-Founder </p>
                      </div>
                          </div>  */}
                          <p>The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating...</p>
                          <Link to="/blog/blog2">     <button>Read More</button> </Link>
                        
                    </div>
                     </div>
                </div>




                
                <div className='blogos-card'>
                    <img src="https://myfriend.net.in/wp-content/uploads/2019/09/blog3.jpg" className='imge-blog' alt="Avatar" />
                    <div class="p-4">
                    <div className='blog-posted-date'>
                    <h5 className='blog-text'>Blog Article</h5>
                    <div className='date-details'>
                          <h6>Jun 12 2023</h6>
                          <p><b>4 mints ago</b></p>
                        </div>
                    </div>
                    
                    <h5>Building Data Analytics Software</h5>
                    <div className='blog-posted'>
                        {/* <div className='d-flex'>
                      <div className='logo-blog2'>
                      
                      </div>
                      <div className='m-2'>
                      <h4 >Anil Kumar</h4>
                      <p>Co-Founder </p>
                      </div>
                          </div>  */}
                          <p>The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating...</p>
                          <Link to="/blog/blog3">     <button>Read More</button> </Link>
                        
                    </div>
                     </div>
                </div>


                
                <div className='blogos-card'>
                    <img src="https://myfriend.net.in/wp-content/uploads/2019/05/blog-slide3.jpg" className='imge-blog' alt="Avatar" />
                    <div class="p-4">
                    <div className='blog-posted-date'>
                    <h5 className='blog-text'>Blog Article</h5>
                    <div className='date-details'>
                          <h6>Jun 25 2022</h6>
                          <p><b>11 mints ago</b></p>
                        </div>
                    </div>
                    
                    <h5>How to Make Website WCAG Compliant?</h5>
                    <div className='blog-posted'>
                        {/* <div className='d-flex'>
                      <div className='logo-blog2'>
                      
                      </div>
                      <div className='m-2'>
                      <h4 >Anil Kumar</h4>
                      <p>Co-Founder </p>
                      </div>
                          </div>  */}
                          <p>The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating...</p>
                          <Link to="/blog/blog4">     <button>Read More</button> </Link>
                        
                    </div>
                     </div>
                  {/*  <div class="p-4">
                    <h5 className='blog-text'>Blog Article</h5>
                    <h5>Building Data Analytics Software</h5>
                    <div className='blog-posted'>
                         <div className='d-flex'>
                      <div className='logo-blog4'>
                      
                      </div>
                      <div className='m-2'>
                      <h4 >shiva</h4>
                      <p>Jr. developer</p>
                      </div>
                          </div>  
                        <div className='date-details'>
                          <h6>Jun 19 2023</h6>
                          <p><b>4 mints ago</b></p>
                        </div>
                    </div>
                     </div> */}
                </div>

                
                <div className='blogos-card'>
                    <img src="https://myfriend.net.in/wp-content/uploads/2019/05/blog-slide1.jpg" className='imge-blog' alt="Avatar" />
                    <div class="p-4">
                    <div className='blog-posted-date'>
                    <h5 className='blog-text'>Blog Article</h5>
                    <div className='date-details'>
                          <h6>Nov 19 2021</h6>
                          <p><b>4 mints ago</b></p>
                        </div>
                    </div>
                    
                    <h5>The Next Big Challenge for Content Marketer</h5>
                    <div className='blog-posted'>
                        
                          <p>The basic premise of search engine reputation management is to use the following three strategies to accomplish the goal of creating...</p>
                          <Link to="/blog/blog5">     <button>Read More</button> </Link>
                        
                    </div>
                     </div>
             
             
                {/*    <div class="p-4">
                    <h5 className='blog-text'>Blog Article</h5>
                    <h5>The Future of eCommerce Business</h5>
                    <div className='blog-posted'>
                         <div className='d-flex'>
                      <div className='logo-blog'>
                      
                      </div>
                      <div className='m-2'>
                      <h6 >vishnu vardhan</h6>
                      <p>founders</p>
                      </div>
                          </div>  
                        <div className='date-details'>
                          <h6>Jun 1 2023</h6>
                          <p><b> few days ago</b></p>
                        </div>
                    </div>
                     </div>*/}
                </div>



            </div>
        </div>
  </>
 )
}

export default Blog
