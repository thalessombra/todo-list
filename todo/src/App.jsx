
import { useState } from 'react';
import TodoForm from './components/todoForm';
import Todo from './components/todo';
import "./App.css";
import Search from './components/Search';
import Filter from './components/Filter';



function App() {
  const [todos, SetTodos] = useState([
    { id: 1, text: 'Estudar React', category:"Estudos", completed: false },
    { id: 2, text: 'Treinar',category:"Pessoal" ,completed: false },
    { id: 3, text: 'Tocar Bateria',category:"hobby", completed: false },
  ]);

const [search, setSearch] =useState("");

const [filter, setFilter] =useState("All");
const [sort, setSort] =useState("Asc");
  const addTodo = (text, category) => { 

    const newTodos = [...todos, {
      id:Math.floor(Math.random() * 1000),
      text,
      category,
      completed: false,
    }
  ]
  SetTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => 
      todo.id !== id ? todo : null
    );
     SetTodos(filteredTodos);

      
  };
  const completeTodo = (id) => {

    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.completed = !todo.completed : todo);
    SetTodos(newTodos);
  }

  
  return (
    <div className='app'>
    <h1> Lista de tarefas</h1>

    <Search search={search} setSearch={setSearch} />
    <Filter filter ={filter}  setFilter = {setFilter} setSort={setSort} />
    <div className='todolist'>
{todos

  .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.completed
              : !todo.completed
          )
.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
)
.sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
 .map((todo) => (
  
  <Todo key={todo.id}
   todo={todo} 
   removeTodo ={removeTodo} 
   completeTodo ={completeTodo}
   />
))}
    </div>
     <TodoForm  addTodo={addTodo}/>
    </div>
  );
}

export default App
