import React from 'react';
import styled from 'styled-components';

import IndividualReview from './IndividualReview.jsx'

const ReviewList = (props) => {

  return (
    <Review>
      {props.reviews.map((review) =>
        <IndividualReview review={review} />
      )}
    </Review>
  )
};

export default ReviewList;

const Review = styled.div`
  display: block;
`;