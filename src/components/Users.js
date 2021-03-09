import React, {useEffect} from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import ListUsers from './ListUsers';
import { getDataUser } from '../redux/actions/User.actions';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
  const users = useSelector((state) => state.data)
  console.log(users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataUser())
  }, [dispatch])
  return (
    <Container>
      <h1>
        Users
      </h1>
      <Form>
        <Form.Group>
          <Form.Label>Input Users</Form.Label>
          <Form.Control 
            type="test" 
            placeholder="Input users..." 
          />
        </Form.Group>
        <Button>
          Add
        </Button>
      </Form>
      <ListUsers users = {users}/>
    </Container>
  )
}

export default Users
