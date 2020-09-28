import React from 'react';
import styled from 'styled-components';
const Container = styled.button`
  background: ${(props) => (props.bgColor ? props.bgColor : '#0090c5')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '20px'};
  height: ${(props) => props.height || '0'};
  width: ${(props) => props.width || '0'};
`;
const Button = ({ title, bgColor, borderRadius, height, width }) => (
  <Container
    bgColor={bgColor}
    borderRadius={borderRadius}
    height={height}
    width={width}
  >
    {title}
  </Container>
);
export default Button;
