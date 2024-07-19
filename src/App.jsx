import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'

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

  console.log(todos)

  return (
     <div style={styles.container}>
      <h1 style={styles.header}>My Todo List</h1>
      

    <Todos todos={todos} />
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
