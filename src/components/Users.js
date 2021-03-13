import React, {useEffect, useState} from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import ListUsers from './ListUsers';
import { getDataUser, addUser,deleteUser, editUser } from '../redux/actions/User.actions';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
  const handleUsers = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const [dataUser, setDataUser] = useState("")
  const [updateButton, setUpdateButton] = useState(false)
  // const [findEditID, setFindEditID] = useState(null)

  console.log(handleUsers)

  useEffect(() => {
    dispatch(getDataUser())
  }, [dispatch])

  const handleAddOrUpdateUser = () => {
    if(!updateButton) {
      if(dataUser === "") {
        alert("Please input user")
      } else {
        dispatch(addUser(dataUser))
        setDataUser("")
      }
    } else {
      dispatch(editUser({user: dataUser}))
      setDataUser("")
      setUpdateButton()
    }
  }

  const handleEditUser = (users) => {
    setUpdateButton(true)
    setDataUser(users.user)
  }

  return (
    <Container>
      <h1>
        Users
      </h1>
      <Form>
        <Form.Group>
          <Form.Label>Input Users</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Input users..."
            value={dataUser}
            onChange={(e) => setDataUser(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleAddOrUpdateUser}>
          {updateButton ? "Update" : "Add"}
        </Button>
      </Form>
      <ListUsers 
        handleUsers = {handleUsers} 
        deleteUser = {deleteUser}
        handleEditUser = {handleEditUser}
        dispatch = {dispatch}
      />
    </Container>
  )
}

export default Users
