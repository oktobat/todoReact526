import React from 'react';
import styled from 'styled-components'

const TodoListBlock = styled.ul`
  min-height:320px;
  max-height:513px;
  overflow-y:auto;
`

const TodoList = ({todos}) => {
  return (
    <TodoListBlock>
      {
        todos.map((todo)=><li>{todo}</li>)
      }
    </TodoListBlock>
  );
};

export default TodoList;