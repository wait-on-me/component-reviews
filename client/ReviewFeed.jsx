import React from 'react';
import styled from 'styled-components';

import SortingTools from './Sorting.jsx';
import ReviewList from './ReviewList.jsx';

const ReviewFeed = (props) => {
  return (
    <ReviewFeedContainer>
      <SortFilterToolBar>
        <SortingTools onClick={props.onClick} sortDisplay={props.sortMenuDisplay} sortingBy={props.sortingBy} onChange={props.onChange} toggleFilter={props.toggleFilter} />

      </SortFilterToolBar>
      <ReviewList reviews={props.reviewList} />
    </ReviewFeedContainer>
  );

};

export default ReviewFeed;

const ReviewFeedContainer = styled.div`
  width: 640px;
`;

const SortFilterToolBar = styled.div`
  width: inherit;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antaliased;
`;
