import React, {useEffect, useState} from 'react';
import { Button, Form, Container} from 'react-bootstrap';
import ListUsers from './ListUsers';
import { getDataUser, addUser,deleteUser, editUser } from '../redux/actions/User.actions';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
  const handleUsers = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const [dataUser, setDataUser] = useState("")
  const [updateButton, setUpdateButton] = useState(false)
  const [updateUser, setUpdateUser] = useState({})

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
      const update = {
        id: updateUser.id,
        user: dataUser
      }
      dispatch(editUser(update))
      console.log(dataUser)
      setDataUser("")
      setUpdateButton()
    }
  }

  const handleEditUser = (users) => {
    console.log(users)
    setUpdateButton(true)
    setDataUser(users.user)
    setUpdateUser(users)
  }

  return (
    <Container className="pt-4">
      <h1>
        Todo List
      </h1>
      <Form>
        <Form.Group>
          <Form.Label>Input Your Todo List</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Input todo list..."
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
