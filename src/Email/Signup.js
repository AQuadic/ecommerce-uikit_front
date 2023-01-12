import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const navegate = useNavigate();
    const [loading, setloading] = useState(false);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [phone_country, setv] = useState("AE");

    const [password, setpassword] = useState("");
    const [password_confirmation, setpassword_confirmation] =
      useState("");
      const [error, seterror] = useState("");
    const sin =  () => {
      console.warn(
        name,
        email,
      
        phone_country,
        password,
        password_confirmation
      );
    const po =  axios.post("https://v2.freshfarm.ae/api/v1/users/auth/signup",{
      'name':name,
      'email':email,
     
      'phone_country':phone_country,
      'password':password,
      'password_confirmation':password_confirmation
    },
   {
    headers :{
      'Content-Type':'application/json',
      'Accept':' application/json',
      'Accept-Language':'ar'
  
       }
   }
      
    ).then((res)=>{console.log(res);
    if(res.data){
      localStorage.setItem("user",JSON.stringify(res.data.user));
      localStorage.setItem("token",JSON.stringify(res.data.token));
      navegate('/');
  
    }
    
    
    }).catch((error)=>{
      console.log(error.response.data.message);
      alert(error.response.data.message)
      seterror(error.response.data.message)
    });
  
    console.log(po)
    }
  return (
   
    <Container>
      <section className=" login signup ">
        <button className="back" onClick={()=>{navegate('/allproduct')}}>
      
          <img src="./images/noun_Arrow Left_2682937.svg" alt="" />
          <h3>Back to store</h3>
        </button>

        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Create an account and 
discover the benefits</h2>
            <p className="text-center ">
            Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <Form>
            <Form.Group>
                <Form.Control
                  id="First-Name"
                  type="text"
                  required
                  placeholder="First Name"

                   onChange={(e)=>setname(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="Last-Name"
                  type="text"
                  required
                  placeholder="Last Name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="email"
                  type="email"
                  required
                  placeholder="E-mail"
                   onChange={(e)=>setemail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="password"
                  type="password"
                  required
                  placeholder="Password"
                   onChange={(e)=>setpassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="password confirmation"
                  type="password"
                  required
                  placeholder="password confirmation"
                   onChange={(e)=>{setpassword_confirmation(e.target.value); }}
                />
              </Form.Group>
              <div className="w-100 forget-pass  mt-3">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="I agree to the Google Terms of Service and Privacy Policy"
                />

                
              </div>
             

              <Button className="w-100  btn-log" type="submit" onClick={(e)=>{
                e.preventDefault()
                  console.log(email , password , password_confirmation,phone_country);
                 if (email && password && password_confirmation&&phone_country) {
                 console.log("tes")
                 
                  if (password !== password_confirmation) {
                    console.log("yaa")
                    seterror("pleace password congirmed not matched");
                    console.warn(error)
                    
                  } else {
                 console.log("yaa")
                    sin();
                  }
                }
                else{
                  seterror("pleace Enter All information about you")
                  console.warn(error)
                }
               
              }}
              
              >
              Sign in
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 not text-center ">
       <Link to='/login'> Are you already a member? </Link>
        </div>
      </section>
    </Container>
  
  )
}

export default Signup