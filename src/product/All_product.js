
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import According from '../components/According'
import All_image from '../components/All-image'
import Footer from '../components/Footer'
import About_product from './About_product'

function All_product() {
  return (
  <>
  <Container>
  <div className="nav2">
  <div className="container">
    <div className="crump">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/"><img src="./images/noun_Home_2102808.svg" alt=""/></Link></li>
          
          <li className="breadcrumb-item">All products</li>
          
        </ol>
      </nav>
  </div>


  </div>
</div>
<div className='product-show'>

<According/>
<About_product/>
</div>



  <All_image/>
  <Footer/>
  </Container>
  </>
  )
}

export default All_product