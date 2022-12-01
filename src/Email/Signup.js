import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const navegate = useNavigate();
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
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  id="password"
                  type="password"
                  required
                  placeholder="Password"
                />
              </Form.Group>
              <div className="w-100 forget-pass  mt-3">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="I agree to the Google Terms of Service and Privacy Policy"
                />

                
              </div>
             

              <Button className="w-100  btn-log" type="submit">
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