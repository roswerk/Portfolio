import React from "react";
import {Form, Button, InputGroup, FormControl} from "react-bootstrap"
import "./contactMe.css"

function ContactMe(){

return(
  <div clasName="formMain" id="contact">
    <div class="contactTitle">
    <h2 className="contactTitle">Contact Me</h2>
    </div>
    
    <Form className="formContent">
      
      <div className="emailAndPass">

  <Form.Group className="mb-3" controlId="formBasicEmail" className="emailAddress">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword" className="password">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>

  </div>
  
  <div className="textbox">

  <InputGroup >
    <InputGroup.Text >Menssage</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" className="messageholder" />
  </InputGroup>
  

<div className="contactBtn">
  <Button variant="primary" type="submit" className="contactButton">
    Submit
  </Button>
  </div>

  </div>

</Form>

    
  </div>
)

}

export default ContactMe