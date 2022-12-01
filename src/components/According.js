import React from 'react'
import { Accordion, Form } from 'react-bootstrap'

function According() {
  return (
    <>
     <Accordion className='fillter' defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item onChange={(e)=>{console.log(e.target.id)}} eventKey="0">
        <Accordion.Header>PRODUCT TYPE</Accordion.Header>
        <Accordion.Body>
        <div className="mb-3">
          <Form.Check 
            type='checkbox'
            id='t-shirts'
            label='T-Shirts (411)'
          />
           <Form.Check 
            type='checkbox'
            id='sweatshirts'
            label='Sweatshirts (131)'
          />
           <Form.Check 
            type='checkbox'
            id='tanktops'
            label='Tank Tops (56)'
          />
           <Form.Check 
            type='checkbox'
            id='dressshirts'
            label='Dress shirts (8)'
          />
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item onChange={(e)=>{console.log(e.target.id)}} eventKey="1">
        <Accordion.Header>PRICE</Accordion.Header>
        <Accordion.Body>
        <div className="mb-3">
          <Form.Check 
            type='checkbox'
            id='t-shirts'
            label='T-Shirts (411)'
          />
           <Form.Check 
            type='checkbox'
            id='sweatshirts'
            label='Sweatshirts (131)'
          />
           <Form.Check 
            type='checkbox'
            id='tanktops'
            label='Tank Tops (56)'
          />
           <Form.Check 
            type='checkbox'
            id='dressshirts'
            label='Dress shirts (8)'
          />
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>COLLECTION</Accordion.Header>
        <Accordion.Body>
              <div className="mb-3">
          <Form.Check 
            type='checkbox'
            id='default-checkbox'
            label='T-Shirts (411)'
          />
           <Form.Check 
            type='checkbox'
            id='default-checkbox'
            label='Sweatshirts (131)'
          />
           <Form.Check 
            type='checkbox'
            id='default-checkbox'
            label='Tank Tops (56)'
          />
           <Form.Check 
            type='checkbox'
            id='default-checkbox'
            label='Dress shirts (8)'
          />
</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>SIZE</Accordion.Header>
        <Accordion.Body>
        <div className="allcolor size">
        <span className="s-xs"></span>
        <span className="s-s"></span>
        <span className="s-m"></span>
        <span className="s-l"></span> 
        <span className="s-xl"></span>
      </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>COLOR</Accordion.Header>
        <Accordion.Body>
        <div className="allcolor">
        <span className="c-black"></span>
        <span className="c-tea"></span>
        <span className="c-blue"></span>
        <span className="c-white"></span>
        <span className="c-blue"></span>
        <span className="c-white"></span>
      </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  )
}

export default According