
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



function Navbar2() {
  const [data , setdata]=useState("")
  const [catigory , setdata2]=useState("")
  const navegate = useNavigate()
  const qi = useSelector((state)=>state.counter.qitem)
 
  const[state_user,setstate_user]= useState(localStorage.getItem("state"))
  const [auth,setauth]=useState(state_user?localStorage.getItem("token"):0)

  const out =()=>{
    setstate_user(false)
    const acountout= axios.post("https://v2.freshfarm.ae/api/v1/users/auth/logout",{
      'from_all':true
    },{
      headers :{
        'Authorization':`Bearer ${auth}  `,
        'Content-Type':"application/json",
        'Accept':' application/json',
        'Accept-Language':'ar'
    
         }
    }).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)});
    console.log(acountout)
    localStorage.clear()
    navegate("/login");
   }
   const icon_nav = ()=>{
    console.log(state_user)
    if(state_user){
      return( <li onClick={()=>{out();  navegate('/login');setstate_user(false)}}>
      <img  src='./images/exit.png' alt=""  />
    </li>)
    }
    else{
      return( <li onClick={()=>{navegate('/product') }}>
      <img src='./images/noun_avatar_2102861 (2).svg' alt=""  />
    </li>)
    }
  }
  icon_nav();
   useEffect(()=>{
  console.log("change state")
    setauth(state_user?localStorage.getItem("token"):0)
   },[state_user])


 
   useEffect(()=>{
    const handelcat =()=>{
      axios.get("https://v2.freshfarm.ae/api/v1/meta/data",{
    headers:{
      "Content-Type": "application/json",
        "Accept": "application/json",
        "Accept-Language": "ar",
    }
    }).then((res)=>{console.log(res.data);setdata2(res.data.categories)}).catch((err)=>{console.log(err)}) 
    }
    handelcat()
  },[])
useEffect(()=>{
  console.log(i18n)
  const handelcat =()=>{
    axios.get("https://v2.freshfarm.ae/api/v1/meta/data",{
  headers:{
    "Content-Type": "application/json",
      "Accept": "application/json",
      "Accept-Language": "ar",
  }
  }).then((res)=>{console.log(res.data);setdata(res.data)}).catch((err)=>{console.log(err)}) 
  }
  handelcat()
},[])

console.log(catigory)
const [lang ,setlang]=useState("en");
const { t, i18n } = useTranslation();
const langEn =()=>{
  i18n.changeLanguage(lang)
 console.log(lang)
  lang ==="en"?setlang("ar"): setlang("en")

}

  return (
   <>
  <div className="new-nav">
      <div className="container">
        <div className="allnav">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link className="navbar-brand" to="/"> <img src='noun_cloth_2129414.svg' alt="logo icon1" />
            <h1><span className="recolor">E-</span> Shop</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
               {/* <li className="nav-item active">
                <Link className="nav-link" to="#">Men </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Women</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Kids</Link>
              </li>  */}
              { catigory?
                catigory.slice(0,3).map((data)=>{
                  return(
                    <li className="nav-item" key={data.id}>
                      <Link className="nav-link" to="#">{data.name[ i18n.language]} </Link>
                    </li>
                  )
                }):<li className="nav-item active" >
                <Link className="nav-link" to="#">Men </Link>
              </li>
                
              } 
            </ul>
            
            <ul className="nav-icon">
              <li>
                <img src='./images/noun_Search_2102816 (2).svg' alt=""  />
              </li>
              <li >
                <img onClick={()=>navegate('/product')} src='./images/noun_cart_2102832 (4).svg' alt=""  />
                <p onClick={()=>navegate('/pay')}>{qi}</p>
              </li>
             
      {state_user?<li onClick={()=>{out();  navegate('/login');setstate_user(false)}}>
      <img  src='./images/exit.png' alt=""  />
    </li>:<li onClick={()=>{navegate('/login') }}>
      <img src= './images/noun_avatar_2102861 (2).svg' alt=""  />
    </li>}
    <li>
      <img src='./images/lang.svg' onClick={()=>{ langEn()}} alt=''/>
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