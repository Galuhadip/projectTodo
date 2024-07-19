import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Join Ready Set Code!',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React fundamentals',
      completed: false,
    }
  ])


  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (todoId) => {
    const deleteTodos = todos.filter((todo) => {
      if (todo.id === todoId) {
        return false
      }
        return true
    })
    setTodos(deleteTodos)
  }

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }
    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }
    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }
  

  return (
     <div style={styles.container}>
      <h1 style={styles.header}>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} addTodo={addTodo} />
    </div>

    
  )
}



const styles = {
  container: {
    textAlign: 'center',
    padding: '12px'
  },
  header: {
    fontSize: '36px'
  }
}

export default App
