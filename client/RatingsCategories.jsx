import React from 'React';
import styled from 'styled-components';

const RatingCategories = (props) => {
  const categoriesCopy = Object.assign({}, props.categories)
  delete categoriesCopy.Overall


  return (
    <RatingsSummary>
      {Object.entries(categoriesCopy).map(([key, value], index) =>
        <RatingsValueContainer key={index}>
          <Value>{value}</Value>
          <Category>{key}</Category>
        </RatingsValueContainer>
      )}

    </RatingsSummary>

  )

};

export default RatingCategories;

const RatingsSummary = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`

const RatingsValueContainer = styled.div`
  padding: 0 0.5rem;
  position: relative;
  text-align: center;
  border-right: solid 0.3px #d8d9db;
  &:last-child {
    border-right: none;
  }
`;

const Value = styled.div`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
`;

const Category = styled.div`
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  font-weight: normal;
  text-transform: capitalize;
  white-space: nowrap;
`;