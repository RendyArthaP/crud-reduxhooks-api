import React from 'react'
import { Button } from 'react-bootstrap'

const ListUsers = ({handleUsers, deleteUser, handleEditUser, dispatch}) => {
  return (
    <div className="mt-5">
      {handleUsers.map((users) => (
        <div key={users.id} className="py-1 text-center d-flex justify-content-between col-lg-8 mx-auto">
          <span>
            {users.user}
          </span>
          <div>
            <Button 
              onClick={() => dispatch(deleteUser(users.id))} 
              variant="danger"
              className="btn-sm mx-2"
            >
              Delete
            </Button>
            <Button 
              onClick={() => handleEditUser(users)} 
              variant="success"
              className="btn-sm px-3"
            >
              Edit
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListUsers
