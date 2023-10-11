//import React from 'react'

const TodoSearch = ({searchValue,setSearchValue}) => {


  return (
    <input 
      placeholder='ingrese tarea' 
      onChange={(e)=> setSearchValue(e.target.value)}
      value= {searchValue}
    />
  )
}

export default TodoSearch