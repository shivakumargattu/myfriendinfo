import React from 'react'
import "./index.css"
import Carouseles from '../CaroselComponent'
import Clients from '../Clients'
import About from '../AboutUs'
import OurServices from '../OurServices'
import Process from '../Process'
import Protfolio from '../Protfolio'

const index = () => {
  return (
    <>
    <div>
        <div>
      <Carouseles/>
      <Clients/>
      <About/>
      <OurServices/>
      <Process/>
      <Protfolio/>
        </div>
    </div>
    </>
  )
}

export default index
