
import { createContext, useRef, useState } from 'react';
import { Provider} from 'react-redux';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar2 from './components/Navbar';

import Forget from './Email/Forget';
import Login from './Email/Login';
import Signup from './Email/Signup';
import Product from './product/Product';

import Pay from './product/Pay';
import store from './data/counterSilce';
import All_product from './product/All_product';
import Payment from './product/Payment';
export const Contextid = createContext();
function App() {

  const filter = (id)=>{
    console.log(id)
  }
  const [we ,setwe]=useState("")
  const navref =useRef()
  window.onresize=()=>{
    
          setwe(navref.current.clientWidth)
    
  }
 
  return (
  <Provider store={store}>
    <div className="App" ref={navref}>
     
      <BrowserRouter>
    
     <Navbar2/>
      <Routes>
        <Route path='/'  element={<Home  we={we} />}/>
        <Route path='/product' element={<Product we={we}/>}/>
        <Route path='/login' element={<Login filter={filter}/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forget' element={<Forget/>}/>
        <Route path='/pay' element={<Pay/>}/>
        <Route path='/allproduct' element={<All_product/>}/>
        <Route path='/payment' element={<Payment/>}/>



      </Routes>
      </BrowserRouter>
    
    </div>
    </Provider>
  );
}

export default App;
