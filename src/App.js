import { BrowserRouter,
  Routes, // instead of "Switch"

  Route} from "react-router-dom"
  import "./App.css"

import Header from "./components/Header";
import Home from "./components/Home";

import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Testimonel from "./components/Testmonieal";
import Blog from "./components/Blogs";
import Webdevlopment from "./components/Webdevelopment";
import Webdesign from "./components/Webdesign";
import MobileDevelopment from "./components/MobileDevelopment";
import DigitalMarketing from "./components/DigitalMarketing";
import SoftwareTesting from "./components/SoftwareTesting";
import PortfolioRouter from "./components/PortfolioRouter";
import TestimonalRouter from "./components/TestimonalRouter";
import AboutUsRouter from "./components/AboutUsRouter";
import ConatctUsRouter from "./components/ContactUsRouter";
import Careeres from "./components/Careers";
import Angular from "./components/TechnologiesComponents/Frontend/Angular";
import ReactJsComponent from "./components/TechnologiesComponents/Frontend/ReactjsComponet";
import BackboneJs from "./components/TechnologiesComponents/Frontend/BackboneJs";
import JavaScript from "./components/TechnologiesComponents/Frontend/JavaScript";
import VartualReality from "./components/Protfolio/ProtfolioDetailedComponents/VertualReality";






function App() {
  return (
    <div className="App">

     <BrowserRouter>
  <Header/>
  <Routes>
  
  
        
        <Route path="/" element={ <Home/> } />
        <Route path="/blog" element={ <Blog/>} />
        <Route path="/service/webdevlopment" element={<Webdevlopment/>}/>
        <Route path="/webdesign" element={<Webdesign/>}/>
        <Route path="/softwaretesing" element={<SoftwareTesting/>}/>
        <Route path="/digitalmarketing" element={<DigitalMarketing/>}/>
        <Route path="/mobiledevelopment" element={ <MobileDevelopment/>}/>

         {/* Technologies components */}
         <Route path="/angular" element={ <Angular/>}/>
         <Route path="/reactjs" element={ <ReactJsComponent/>}/>
         <Route path="/backbonejs" element={ <BackboneJs/>}/>
         <Route path="/javascript" element={ <JavaScript/>}/>
         

         
         

         {/*Rouetr-componets */}

        <Route path="/portfolio" element={ <PortfolioRouter/>}/>
        <Route path="/testimoneal" element={ <TestimonalRouter/>}/>
        <Route path="/aboutus" element={<AboutUsRouter/> }/>
        <Route path="/contactus" element={<ConatctUsRouter/> }/>
        <Route path="/career" element={<Careeres/> }/>
        <Route path="/vertualreality" element={<VartualReality/>}/>
        
          
        
        
       
        
      </Routes>
 
  <Testimonel/>
  <ContactUs/>
  <Footer/>
  
    </BrowserRouter>
      </div>
  )
}

export default App;
