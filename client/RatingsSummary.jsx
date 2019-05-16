import React from 'React';
import RatingsCategories from './RatingsCategories.jsx'
import styled from 'styled-components';

const RatingsSummary = (props) => {
  return (
    <SummaryBar>
      <RatingsCategories categories={props.ratings} />
    </SummaryBar>
  )
};

export default RatingsSummary;

const SummaryBar = styled.div`
display: flex;
flex-direction: column;
`;