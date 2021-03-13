import React from 'react'
import { Container } from 'react-bootstrap'

const ListUsers = ({handleUsers, deleteUser, handleEditUser, dispatch}) => {
  return (
    <Container>
      {handleUsers.map((users) => (
        <div key={users.id}>
          <span>
            {users.user}
          </span>
          <button onClick={() => dispatch(deleteUser(users.id))}>Delete</button>
          <button onClick={() => handleEditUser(users)}>Edit</button>
        </div>
      ))}
    </Container>
  )
}

export default ListUsers
