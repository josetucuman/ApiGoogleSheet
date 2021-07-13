import React from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'


export const App = () => {
  return (
    <div>
      <Container fluid className="container">
        <Header as='h2'>React Google Sheets</Header>
        <Form className="form">
          <Form.Field>
            <label>Nombre</label>
            <input placeholder="Ingrese su nombre" />
          </Form.Field>
          <Form.Field>
            <label>Edad</label>
            <input placeholder="Ingrese su edad" />
          </Form.Field>
          
        </Form>
      </Container>
    </div>
  )
}
