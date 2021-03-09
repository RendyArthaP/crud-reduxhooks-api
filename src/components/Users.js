import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import ListUsers from './ListUsers';
import { handleUsers } from '../redux/reducers/User.reducers';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
  return (
    <Container>
      <h1>
        Users
      </h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Input Users</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
          />
        </Form.Group>
        <Button>
          Add
        </Button>
      </Form>
      <ListUsers />
    </Container>
  )
}

export default Users
