import React from 'react'

const TodoItem = ({text,completed,onComplete,onDelete}) => {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && 'Icon-check__active'}`}
        onClick={onComplete}
      >
        V
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p__complete'}`}>
        {text}
      </p>
      <span onClick={onDelete} className="Icon Icon-delete">X</span>
    </li>
  )
}

export default TodoItem