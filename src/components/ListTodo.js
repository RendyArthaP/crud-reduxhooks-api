import React from 'react'
import { Button } from 'react-bootstrap'

const ListTodo = ({handleTodos, deleteTodo, handleEditTodo, dispatch}) => {
  return (
    <div className="mt-5">
      {handleTodos.length <= 0 
        ? "Your Todo List is Empty" 
        : 
        <div>
          {handleTodos.map((todos) => (
            <div key={todos.id} className="py-1 text-center d-flex justify-content-between col-lg-8 mx-auto">
              <span>
                {todos.todo}
              </span>
              <div>
                <Button 
                  onClick={() => dispatch(deleteTodo(todos.id))} 
                  variant="danger"
                  className="btn-sm mx-2"
                >
                  Delete
                </Button>
                <Button 
                  onClick={() => handleEditTodo(todos)} 
                  variant="success"
                  className="btn-sm px-3"
                >
                  Edit
                </Button>
              </div>     
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default ListTodo
