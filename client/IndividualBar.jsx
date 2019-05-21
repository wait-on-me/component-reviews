import React from 'react';
import styled from 'styled-components';

const Bar = (props) => {

  const num = props.numOfReviews;
  // console.log(num)
  const width = Math.round((props.percentage / num * 100));
  const percentage = width + '%'

  // console.log(percentage)
  // console.log('this is the width', width)


  //console.log('test click', props.id, props.index)

  return (
    <BarDiv onClick={() => { props.onClick(props.id) }} >
      <BarContainer>
        <Value >{props.value}</Value>
        <BarOutline>
          <Fill style={{ width: percentage }}></Fill>
        </BarOutline>
      </BarContainer>
    </BarDiv >
  )
};

export default Bar;

const BarDiv = styled.div`
`;

const BarContainer = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  align-items: center;
  
`;
const Value = styled.span`
  margin-right: 0.5rem;
  width: 1rem;
  text-align: center;
`;

const BarOutline = styled.div`
  display: block;
  flex: auto;
  height: 1rem;
  border: 1px solid #d8d9db;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: -1px;
  margin-bottom: -2px;
  &:hover {
    border: solid 1.5px #da3743;
  }
`;

const Fill = styled.span`
  background-color: #da3743;;
  height: 100%;
  display: block;
`;