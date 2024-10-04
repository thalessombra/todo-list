/* eslint-disable react/jsx-key */
import { useState } from 'react';
import Todo from './components/todo';
import TodoForm from './components/todoForm';
import "./App.css";



function App() {
  const [todos, SetTodos] = useState([
    { id: 1, text: 'Estudar React', category:"Estudos", completed: false },
    { id: 2, text: 'Treinar',category:"Pessoal" ,completed: true },
    { id: 3, text: 'Tocar Bateria',category:"hobby", completed: false },
  ])


  return (
    <div className='app'>
    <h1> Lista de tarefas</h1>
    <div className='todolist'>
{todos.map((todo) => (
  
  <Todo todo={todo} />
))}
    </div>
     <TodoForm />
    </div>
  );
}

export default App
