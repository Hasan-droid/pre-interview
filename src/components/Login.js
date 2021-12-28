import React from 'react'
import { Form , Button } from 'react-bootstrap'
import "./style.css"

export default function Login() {
    return (
        <Form className="formBorder">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="userName" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  
  </Form.Group>
  <Form.Group className="mb" controlId="formBasicCheckbox">
  <Button variant="danger" type="submit">
    login
  </Button>
  </Form.Group>

</Form>
    )
}
