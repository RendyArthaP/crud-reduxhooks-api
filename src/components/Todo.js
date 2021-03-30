import React, {useEffect, useState} from 'react';
import { Button, Form, Container} from 'react-bootstrap';
import ListTodos from './ListTodo';
import { getDataTodo, addTodo,deleteTodo, editTodo } from '../redux/actions/Todo.actions';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
  const handleTodos = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const [dataTodo, setDataTodo] = useState("")
  const [updateButton, setUpdateButton] = useState(false)
  const [updateTodo, setUpdateTodo] = useState({})

  useEffect(() => {
    dispatch(getDataTodo())
  }, [dispatch])

  const handleAddOrUpdateTodo = () => {
    if(!updateButton) {
      if(dataTodo === "") {
        alert("Please input your todo")
      } else {
        dispatch(addTodo(dataTodo))
        setDataTodo("")
      }
    } else {
      const update = {
        id: updateTodo.id,
        todo: dataTodo
      }
      dispatch(editTodo(update))
      console.log(dataTodo)
      setDataTodo("")
      setUpdateButton()
    }
  }

  const handleEditTodo = (todos) => {
    console.log(todos)
    setUpdateButton(true)
    setDataTodo(todos.todo)
    setUpdateTodo(todos)
  }

  return (
    <Container className="pt-4">
      <h1>
        Todo List with Redux
      </h1>
      <Form>
        <Form.Group>
          <Form.Label>Input Your Todo List</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Input todo list..."
            value={dataTodo}
            onChange={(e) => setDataTodo(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleAddOrUpdateTodo}>
          {updateButton ? "Update" : "Add"}
        </Button>
      </Form>
      <ListTodos
        handleTodos = {handleTodos} 
        deleteTodo = {deleteTodo}
        handleEditTodo = {handleEditTodo}
        dispatch = {dispatch}
      />
    </Container>
  )
}

export default Todo
