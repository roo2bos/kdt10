import React from 'react';
import styled from 'styled-components';

//css in JS: CSS를 js안에 작성함
// styled-components, emotion, styled-jsx, ...
// 각 컴포넌트마다 격리된 스타일 적용가능

const StyledContainer = styled.div`
  display: flex;
`;
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor || 'blue'};
  &:hover {
    transform: translateY(-20px);
  }
`;
const StyledComponents = () => {
  return (
    <StyledContainer>
      <StyledBox />
      <StyledBox bgColor="red" />
      <StyledBox bgColor="orange" />
    </StyledContainer>
  );
};

export default StyledComponents;
