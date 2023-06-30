import React from 'react'
import SocialMediaIcons from '../../../Footer/SocialmediaIcons'
import "./index.css"


const Blog5 = () => {

  return (<>   
  <div className='bg-blog-continer'>
      <div className='blogs-details-container'>
        <h4 className='m-3 mb-0 mt-1 ml-1 '><b>Blog Article</b></h4>
        <div className='blog-posted-date'>
        <h3 className='m-3 mb-2 mt-2 ml-0 '><b>The Next Big Challenge for Content Marketer</b></h3>
        <h5 className='date-details-1'>Posted : June 28 2023 11:03 AM </h5>

        </div>
        
        <div className='blog-top-conatiner'>
         
             <img src='https://myfriend.net.in/wp-content/uploads/2020/09/MFIS.png' alt='imge' className='logo-blog-icon'/> 
        
             <SocialMediaIcons/>
        
        </div>
        <hr/>
        <div className='bottom-blog-continer'>
            <img src='https://myfriend.net.in/wp-content/uploads/2019/05/blog-slide1.jpg' alt='imge' className='blog-imge'/>
            <p className='pt-3'>The Next Big Challenge for Content Marketer</p>

            <div>
            <h3><b>The Next Big Challenge for Content Marketer</b></h3>
                <p>Mobile apps have already penetrated every sphere of our lives and every imaginable business niche. Naturally, the appeal of mobile apps for its market potential cannot fade away anytime soon, at least until another great technology can replace mobile apps. But surprisingly, only a handful of apps in every niche really become successful and only a handful of apps across all niches really make it a phenomenal success. So, what about the failure of other apps? What are the key factors responsible for the failure of millions of apps? Well, apart from the ill-conceived app idea and development and design flaws many apps simply fail because of their pre-launch and post-launch shortcomings.</p>
                <p>Since most of us spend a considerable portion of our daily time on mobile apps and since they have a plethora of options for every app niche, knowing their specific needs, priorities, preferences, and expectations become very crucial for app marketers. This is why every app must conduct elaborate market research before starting with an app project. Even while the app is ready for launch, you need to make a launch plan based upon the most suitable channels and marketing message for your target audience.</p>
                <div className='blog-inside-imge'>
                 <img alt='img' src="https://engitech.s3.amazonaws.com/images/blog-post.png"/>
                 
                 </div>
                 <h4 className='pt-5'><b>Missing On A Pre-Launch Campaign</b></h4>
                 <p>A vast majority of the app marketers mainly concentrate on the post-launch app marketing techniques and measures while completely missing on the pre-launch campaign. This prevents the app to create buzz and hype just around the time when the app is launched. As and when you launch the app, already a considerable number of people should expectantly look forward to your app and this requires long-drawn marketing efforts leading up to the app launch event. To create pre-launch buzz and hype about the app a mobile app development company has an array of marketing options like social media campaign, search engine ads, video ads, email campaigns, etc. Apart from online options, you can also reach out to the wider audience with traditional marketing options like outdoor ads, print ads, media ads, and promotional events.</p>
                 <p>Just as a retail business in real life is remembered not just for its product offerings but also because of its services, support, and customer-friendliness, an app that offers a helpful customer support system for its valued users enjoy more traction and engagement than other apps. Great brands all over the globe enjoy appreciation and popularity because of their customer-friendly support and services.</p>
            </div>
            
        </div>
        <div className='blog-bottom-last pt-5'>
       <h5 className='pt-3'> Happy to share:</h5>
       <SocialMediaIcons/>
        </div>
       
        <hr/>

        </div>
        </div>
        
      
    </>
 )
}

export default Blog5