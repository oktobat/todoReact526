import React, {useState, useRef} from 'react';
import TodoTemplate from '@/TodoTemplate'
import TodoHeader from '@/TodoHeader'
import TodoInsert from '@/TodoInsert'
import TodoList from '@/TodoList'
import TodoFooter from '@/TodoFooter'

const App = () => {
  // ref 변수 : 화면에 보이는 데이터는 아니지만 프로그램에 필요한 데이터를 관리하기 위한 변수
  const id = useRef(1)
  const [todos, setTodos] = useState([
    // {id:1, checked:false, text:"일정1" }, 
    // {id:2, checked:false, text:"일정2" },
    // {id:3, checked:true, text:"일정3" }, 
    // {id:4, checked:false, text:"일정4" }
  ])

  const onInsert = (value)=>{
    const todo = {id:id.current, text:value, checked:false}
    id.current = id.current + 1;
    setTodos(todos.concat(todo))
    // setTodos([...todos, todo])
    // setTodos(todos.push(todo)) : push()는 기존 todos를 바로 변경하기 때문에 오류가 발생함
  }

  const onToggle = (idno)=>{
    setTodos(todos.map(item=> item.id==idno ? {...item, checked:!item.checked} : item ))
  }

  const onRemove = (idno)=>{
    setTodos(todos.filter( item => item.id !== idno ))
  }

  const onFinishRemove = ()=>{
    setTodos(todos.filter(item=>!item.checked))
  }

  const allRemove = ()=>{
    setTodos([])
  }

  return (
    <TodoTemplate>
      <TodoHeader todos={todos} />
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      <TodoFooter onFinishRemove={onFinishRemove} allRemove={allRemove} />
    </TodoTemplate>
  );
};

export default App;