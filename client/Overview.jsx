import React from 'react';

import styled from 'styled-components';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <ReviewsSummary>
          <ReviewsSummaryContainer>
            <ReviewsOverviewHeaderText>What 500 People Are Saying</ReviewsOverviewHeaderText>
            <OverallRatingsReviewsContainer>
              <OverallRatingsNumbersContainer>
                <OverallRatingsText>Overall ratings and reviews</OverallRatingsText>
                <OverallRatingsTextTwo>Reviews can only be made by diners who have eaten at this restaurant</OverallRatingsTextTwo>
                <StarsAndRatingContainer>
                  <StarsContainer>
                  </StarsContainer>
                  <OverallNumberRating>4.5 based on recent ratings</OverallNumberRating>
                </StarsAndRatingContainer>
                <CategoryRatingsContainer>

                </CategoryRatingsContainer>
                <NoiseContainer>
                  <NoiseAndResultContainer>
                    <IconDiv>Icon</IconDiv>
                    <NoiseResult>Noise - Moderate</NoiseResult>
                  </NoiseAndResultContainer>
                </NoiseContainer>
                <RecommendationsContainer>
                  <RecommendationResultContainer>
                    <ThumbsIconDiv>Thumbs</ThumbsIconDiv>
                    <RecommendationResult>87% of people would recommend it to a friend</RecommendationResult>
                  </RecommendationResultContainer>
                </RecommendationsContainer>
              </OverallRatingsNumbersContainer>
            </OverallRatingsReviewsContainer>
          </ReviewsSummaryContainer>
        </ReviewsSummary>
      </div>
    );
  }

}

export default Overview;

const ReviewsSummary = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewsSummaryContainer = styled.div`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: solid 1px #d8d9db;
`;
const ReviewsOverviewHeaderText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height; 1.33;
  color: #2d333f;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 1rem;
  margin: 0 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const OverallRatingsReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const OverallRatingsNumbersContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

const OverallRatingsText = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  display: flex
`;

const OverallRatingsTextTwo = styled.div`
  padding-top: 0.5rem;
  font-size: 1rem;
  font-weight: normal;
`;

const StarsAndRatingContainer = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
`;

const StarsContainer = styled.div`
  width: calc(16px * 5 + 0.25rem * 5);
`;

const OverallNumberRating = styled(StarsAndRatingContainer)`
  font-size: 0.875rem;
  line-height: 1.43;
`;

const CategoryRatingsContainer = styled.div`
  display: flex;
`;

const NoiseContainer = styled.div`
  padding-top: 1rem;
  max-width: 100%;
`;

const NoiseAndResultContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconDiv = styled.div`
  display: inherit;
`;

const NoiseResult = styled.div`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
  color: #6f737b;
`;

const RecommendationsContainer = styled.div`
  padding-top: 1rem;
  max-width: 100%
`;

const RecommendationResultContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ThumbsIconDiv = styled.div`
  display: inherit;
`;

const RecommendationResult = styled.div`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
  color: #6f737b;
`;