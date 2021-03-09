import React from 'react'
import { Container } from 'react-bootstrap'

const ListUsers = ({users}) => {
  return (
    <Container>
      {users.map((listUser) => (
        <div key={listUser.id}>
          <span>
            {listUser.user}
          </span>
        </div>
      ))}
    </Container>
  )
}

export default ListUsers
