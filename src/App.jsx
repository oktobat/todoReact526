import React, {useState} from 'react';
import TodoTemplate from '@/TodoTemplate'
import TodoHeader from '@/TodoHeader'
import TodoInsert from '@/TodoInsert'
import TodoList from '@/TodoList'
import TodoFooter from '@/TodoFooter'

const App = () => {
  const [todos, setTodos] = useState([
    {id:1, checked:false, text:"일정1" }, 
    {id:2, checked:false, text:"일정2" },
    {id:3, checked:true, text:"일정3" }, 
    {id:4, checked:false, text:"일정4" }
  ])

  const onInsert = (todo)=>{
    setTodos(todos.concat(todo))
    // setTodos([...todos, todo])
  }

  const onToggle = (idno)=>{
    setTodos(todos.map(item=> item.id==idno ? {...item, checked:!item.checked} : item ))
  }

  return (
    <TodoTemplate>
      <TodoHeader />
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} />
      <TodoFooter />
    </TodoTemplate>
  );
};

export default App;