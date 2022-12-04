import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


function Navbar2() {
  const navegate = useNavigate()
  const qi = useSelector((state)=>state.counter.qitem)
  return (
   <>
  
  
  <div className="new-nav">
      <div className="container">
        <div className="allnav">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link className="navbar-brand" to="/"> <img src='./images/noun_cloth_2129414.svg' alt="logo icon1" />
            <h1><span className="recolor">E-</span> Shop</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="#">Men </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Women</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Kids</Link>
              </li>
            </ul>
            
            <ul className="nav-icon">
              <li>
                <img src='./images/noun_Search_2102816 (2).svg' alt=""  />
              </li>
              <li >
                <img onClick={()=>navegate('/allproduct')} src='./images/noun_cart_2102832 (4).svg' alt=""  />
                <p onClick={()=>navegate('/pay')}>{qi}</p>
              </li>
              <li onClick={()=>{navegate('/login')}}>
                <img src='./images/noun_avatar_2102861 (2).svg' alt=""  />
              </li>
            </ul>
          </div>
         


          
        </nav>
      </div>
      </div>
    </div>
   </>
  )
}

export default Navbar2