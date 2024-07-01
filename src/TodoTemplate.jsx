import React from 'react';
import styled from 'styled-components'

const TodoTemplateBlock = styled.div`
  max-width : 521px;
  margin : 50px auto;  
  .content {
    border : 1px solid #000;
    background : #fff;
    min-height : 300px; 
    overflow-y : auto; 
  }
`

const TodoTemplate = ({children}) => {
  return (
    <TodoTemplateBlock>
      <div className="content">{children}</div>
    </TodoTemplateBlock>
  );
};

export default TodoTemplate;