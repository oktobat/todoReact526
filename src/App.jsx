import React, {useState} from 'react';
import TodoTemplate from '@/TodoTemplate'
import TodoHeader from '@/TodoHeader'
import TodoInsert from '@/TodoInsert'
import TodoList from '@/TodoList'
import TodoFooter from '@/TodoFooter'

const App = () => {
  const [todos, setTodos] = useState([])

  const onInsert = (todo)=>{
    // setTodos(todos.concat(todo))
    setTodos([...todos, todo])
  }

  return (
    <TodoTemplate>
      <TodoHeader />
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} />
      <TodoFooter />
    </TodoTemplate>
  );
};

export default App;