import React, { useState } from 'react';
import styled from 'styled-components'
import { FaPlus } from "react-icons/fa6";


const TodoInsertBlock = styled.div`
  form {
    display:flex; background:#495057;
    input { flex:1; border:none;  padding:16px 8px; 
          font-size:1.3rem; outline:none; 
          color:#fff; background:none; 
          &::placeholder { color:#dee2e6 }
    }
    button { border:none; background:#868e96;
      color:#fff; font-size:1.5rem; padding:0 1rem;
      cursor:pointer; }
  }
`

const TodoInsert = () => {
  // 컴포넌트 내부에서 변경되는 데이터 관리 : state 변수
  const [text, setText] = useState("")

  const onChange = (e)=>{
    console.log(e.target.value)
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <TodoInsertBlock>
      <form onSubmit={ onSubmit }>
        <input type="text" placeholder="할 일을 입력하세요." value={text} onChange={ onChange } />
        <button type="submit"><FaPlus /></button>
      </form>
    </TodoInsertBlock>
  );
};

export default TodoInsert;