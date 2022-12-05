import React, { useEffect } from 'react'
import AllImage from '../components/AllImage'
import Footer from '../components/Footer'

import Owlone from '../components/Owlone'
import TsSummer from '../components/TsSummer'
import Dec from './Dec'
import Nav2 from './Nav2'

function Product(props) {
  const we = props.we; 
  return (
   <>
 

  
   <Nav2 we={we}/>
   <TsSummer/>
   <Dec/>
   <Owlone/>
   <AllImage/>
   <Footer/>
   </>
  )
}

export default Product