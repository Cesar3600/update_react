import React,{useState} from 'react'
import './App.css';
import CreateTodoButton from './CreateTodoButton';
import {TodoCounter} from './TodoCounter';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import TodoSearch from './TodoSearch';
import './TodoCounter.css'

const defaultTodos = [
  {text:'Cortar Cebolla', completed:false},
  {text:'Empezar curso', completed:false},
  {text:'comprar pan', completed:false},
  {text:'preparar arroz', completed:false},
  {text:'comprar pescado', completed:true},
]

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [completed, setCompleted] = useState(0)
  const [todos, setTodos] = useState(defaultTodos)


  const completeTodos = () => todos.filter(todo => !!todo.completed).length
  const completedTotal = () => todos.length

  const textSearch = todos.filter(todos => 
    todos.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
  )

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const indexTodo = newTodos.findIndex(todo => todo.text === text)
    newTodos[indexTodo].completed=true
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex(todo => todo.text === text)
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoCounter total={completedTotal()} completed={completeTodos()}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {
          textSearch.map(
            ({ text, completed }) => 
              <TodoItem 
                key={text} 
                text={text} 
                onComplete={() => completeTodo(text)} 
                onDelete={() => deleteTodo(text)} 
                completed={completed}
              />
          )
        }
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
