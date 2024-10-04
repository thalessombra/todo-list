// eslint-disable-next-line no-unused-vars
import React from 'react'

const TodoForm = () => {
  return(  
    <div className='todo-form'>
      <h2>Criar tarefas</h2>
      <form>
        <input type='text' placeholder='Digite o título'  />
        <select>
            <option value=''>Selecione uma categoria</option>
            <option value='Estudos'>Estudos</option>
            <option value='Pessoal'>Pessoal</option>
            <option value='Hobby'>Hobby</option> 
        </select>
        <button type='submit'>
            Criar tarefa
        </button>
    </form>

    </div>
   
  
)};

export default TodoForm;
