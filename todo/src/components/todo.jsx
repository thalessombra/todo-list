// eslint-disable-next-line no-unused-vars
import React from "react"

const todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className='todo'
    style={{textDecoration:todo.completed ? "line-through" : ""}}
    >
    <div className='content'>
    <p>{todo.text}</p>
    <p className='category'>
    <p>({todo.category})</p>
    </p>
    </div>
    <div>
      <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
      <button className="remove" onClick={() => removeTodo(todo.id)} >
      x
      </button>
    </div>
      </div>
  )
}

export default todo
