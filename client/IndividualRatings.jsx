import React from 'react';
import styled from 'styled-components';

const IndividualRating = (props) => {
  const ratingsCopy = Object.assign({}, props.review.individual_rating)
  delete ratingsCopy.Value

  // console.log('rating copy', ratingsCopy)


  return (
    <RatingsContainer>
      {Object.entries(ratingsCopy).map(([key, value], index) =>
        <Container key={index}>
          <Category>{key}</Category>
          <Value>{value}</Value>
        </Container>
      )}
    </RatingsContainer>
  )
};

export default IndividualRating;

const RatingsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
 
`;

const Container = styled.span`
// &:last-child {
//   content: none;
// }
`;

const Category = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.43;
  margin: 0 0.5rem 0 0;
  text-transform: capitalize;

`;


const Value = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.43;
  color: #da3743;

  &::after {
    content: "•";
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    color: #2d333f;
  }



`;