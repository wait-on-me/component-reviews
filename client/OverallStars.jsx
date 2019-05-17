import React from 'react';
import styled from 'styled-components';


const Stars = (props) => {


  const starsArray = [];
  const rating = props.rating

  const renderStars = (number) => {
    let width;
    for (let i = 0; i < 5; i++) {
      if (number >= 1) {
        starsArray.push('whole');
      } else if (number > 0 && number < 1) {
        width = Math.round((number * 100))
        starsArray.push(width);
      } else {
        starsArray.push('empty')
      }
      number--
    }
    return starsArray;
  }

  renderStars(rating);
  // console.log(starsArray);

  const fillStars = starsArray.map((star) => {
    if (star === 'whole') {
      return (<Fill><i className="fas fa-star"></i></Fill>)
    } else if (star === 'empty') {
      return (<Empty><i className="fas fa-star"></i></Empty>)
    } else {
      return (<Percentage><i class="fas fa-star-half-alt"></i></Percentage>)

    }
  });


  return (
    <Container>
      <StarBox>{fillStars}</StarBox>
    </Container>
  )

};

export default Stars;

const Container = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  line-height: 1.43rem;
`;

const StarBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 0.5rem;
  // padding-bottom: 1rem;
  line-height: 1.43rem;
  margin-right: 0.25rem;
 
`;

const Fill = styled.div`
  color: #da3743;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
  
`;

const Empty = styled.div`
  color: #d8d9db
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
`;

const Percentage = styled.div`
  color: #da3743;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
`;