import React from 'react';
import styled from 'styled-components'
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox } from 'react-icons/md'

const TodoListItemBlock = styled.li`
  display:flex; padding:1rem; 
  &:nth-child(even) {  background:#f8f9fa  }
  .list {
    display:flex; align-items:center; 
    flex:1; 
    .red { color:#f00 }
  }
  .remove {
    color:#ff6b6b;
    cursor:pointer;
    font-size:1.5rem;
  }
`

const TodoListItem = ({todo, onToggle}) => {
  const {id, checked, text } = todo
  return (
    <TodoListItemBlock>
      <div className="list" onClick={()=>onToggle(id)}>
        { checked ? <MdCheckBox className="red" /> : <MdCheckBoxOutlineBlank /> }
        <div style={{paddingLeft:'10px'}}>{id}. {text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </TodoListItemBlock>
  );
};

export default TodoListItem;