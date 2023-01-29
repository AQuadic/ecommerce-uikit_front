
import { createContext, useEffect, useRef, useState } from 'react';
import { Provider} from 'react-redux';
import { BrowserRouter,  Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar2 from './components/Navbar';

import Forget from './Email/Forget';
import Login from './Email/Login';
import Signup from './Email/Signup';
import Product from './product/Product';
import { useTranslation } from "react-i18next";

import Pay from './product/Pay';
import store from './data/counterSilce';
import All_product from './product/All_product';
import Payment from './product/Payment';
import TsSummer from './components/TsSummer';
export const Contextid = createContext();

function App() {


  const { t, i18n } = useTranslation();
 useEffect(()=>{
  i18n.language === "ar"?window.document.dir='rtl':window.document.dir='ltr'
 },[i18n.language])
 console.log(window.document.dir)
  const filter = (id)=>{
    console.log(id)
  }
  const navref =useRef()
 
  return (
  <Provider store={store}>
    <div className="App" ref={navref}>
     
      <BrowserRouter>
    
     <Navbar2/>
      <Routes>
        <Route path='/'  element={<Home   />}/>
        <Route path='/product' element={<All_product/>} />
          
        <Route path="/product/:id" element={<Product />} />
       
        <Route path='/login' element={<Login filter={filter}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forget' element={<Forget/>}/>
        <Route path='/pay' element={<Pay/>}/>
       
        <Route path='/payment' element={<Payment/>}/>



      </Routes>
      </BrowserRouter>
    
    </div>
    </Provider>
  );
}

export default App;
