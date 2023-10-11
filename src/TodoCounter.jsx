import React from 'react'

const TodoCounter = (
  {
    total,
    completed
  }) => {
  
  return (
    <h1>
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  )
}

export {TodoCounter}