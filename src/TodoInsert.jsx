import React, { useState } from 'react';
import styled from 'styled-components'

const TodoInsertBlock = styled.div``

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
        <button type="submit">전송</button>
      </form>
    </TodoInsertBlock>
  );
};

export default TodoInsert;