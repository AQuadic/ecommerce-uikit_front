import React from 'react'
import { useParams } from 'react-router-dom'
import AllImage from '../components/AllImage'
import Footer from '../components/Footer'

import Owlone from '../components/Owlone'
import TsSummer from '../components/TsSummer'



function Product() {
 
 
  return (
   <>
 

  
  
   <TsSummer  />
 
   <Owlone/>
   <AllImage/>
   <Footer/>
   </>
  )
}

export default Product