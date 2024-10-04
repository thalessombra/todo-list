// eslint-disable-next-line no-unused-vars
import React from "react"

const todo = ({todo}) => {
  return (
    <div className='todo'>
    <div className='content'>
    <p>{todo.text}</p>
    <p className='category'>
    <p>({todo.category})</p>
    </p>
    </div>
    <div>
      <button className="complete">Completar</button>
      <button className="remove">x</button>
    </div>
      </div>
  )
}

export default todo
