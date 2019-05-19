import React from 'react';
import styled from 'styled-components';

const IndividualStars = (props) => {

  const userStarsArray = [];
  const userRating = props.review.individual_rating
  // console.log('individual', userRating)
  const userOverall = props.review.individual_rating.Overall;

  const renderUserStars = (number) => {
    for (let i = 0; i < 5; i++) {
      if (number >= 1) {
        userStarsArray.push('whole');
      } else {
        userStarsArray.push('empty');
      }
      number--
    }
    return userStarsArray;
  }

  renderUserStars(userOverall)

  const colorStars = userStarsArray.map((star) => {
    if (star === 'whole') {
      return (<Fill><i className="fas fa-star"></i></Fill>)
    } else {
      return (<Empty><i className="fas fa-star"></i></Empty>)
    }
  })

  return (
    <StarsDiv>
      <StarDisplay>{colorStars}</StarDisplay>
    </StarsDiv>
  )
};

export default IndividualStars;

const StarsDiv = styled.div`
  width: calc(16px * 5 + 0.25rem * 5);
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
`;

const Fill = styled.div`
width: 16px;
height: 16px;
margin-right: 0.25rem;
color: #da3743;

`;

const Empty = styled.div`
width: 16px;
height: 16px;
margin-right: 0.25rem;
color: #d8d9db
`;

const StarDisplay = styled.div`
  display: flex;
  flex-direction: row;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
`;