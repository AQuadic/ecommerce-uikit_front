import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function Nav2() {
    const [we ,setwe]=useState("")
    const navref =useRef()
    window.onresize=()=>{
      
            setwe(navref.current.clientWidth)
        console.log(we)
    }
   
  return (
  <>
  <div className="nav2" ref={navref} >
  <div className="container">
    <div className="crump">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/"><img src="./images/noun_Home_2102808.svg" alt=""/></Link></li>
          <li className="breadcrumb-item"><Link to='/allproduct'>Men`s Tops</Link></li>
          <li className="breadcrumb-item"><Link to='/allproduct'>T-Shirt</Link></li>
          <li className="breadcrumb-item active" aria-current="page">T-Shirt Summer Vibes</li>
        </ol>
      </nav>
  </div>
{
    we > 573 ? <div className="delevery">
    <div className="part1">
      <img src="./images/noun_delivery_2057282.svg" alt=""/>
      <div className="about">
        <h2>Standard shipment 
        </h2>
        <p>Free within 3-6 business days</p>
      </div>
    </div>
    <div className="part2">
      <img src="./images/noun_Fast  Delivery_1212438.svg" alt=""/>
      <div className="about">
        <h2>Express delivery</h2>
        <p>$35,00 available</p>
      </div>
    </div>
  </div>:null
}

  </div>
</div>

  </>
  )
}

export default Nav2