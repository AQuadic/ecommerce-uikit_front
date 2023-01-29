import React from 'react'
import { useParams } from 'react-router-dom'
import AllImage from '../components/AllImage'
import Footer from '../components/Footer'

import Owlone from '../components/Owlone'
import TsSummer from '../components/TsSummer'



function Product() {
  const {id} = useParams()
  console.log(id)
  return (
   <>
 

  
  
   <TsSummer id={id} />
 
   <Owlone/>
   <AllImage/>
   <Footer/>
   </>
  )
}

export default Product