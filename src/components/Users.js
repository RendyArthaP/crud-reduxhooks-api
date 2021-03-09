import React, {useEffect, useState} from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import ListUsers from './ListUsers';
import { getDataUser, addUser,deleteUser } from '../redux/actions/User.actions';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
  const handleUsers = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const [dataUser, setDataUser] = useState("")

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
            value={dataUser}
            onChange={(e) => setDataUser(e.target.value)}
          />
        </Form.Group>
        <Button onClick={() => dispatch((addUser(dataUser)))}>
          Add
        </Button>
      </Form>
      <ListUsers 
        handleUsers = {handleUsers} 
        deleteUser = {deleteUser}
        dispatch = {dispatch}
      />
    </Container>
  )
}

export default Users
