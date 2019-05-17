import React from 'react';
import RatingsSummary from './RatingsSummary.jsx';
import BarGraph from './BarGraph.jsx'
import Stars from './OverallStars.jsx'

import styled from 'styled-components';
const axios = require('axios');

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: () => Math.floor(Math.random() * 25),
      numOfReviews: 0,
      overall: 0,
      ratingList: {},
      reviews: [],
      barGraph: {},
      noiseLevel: 'Nothing to Report',
    }
  }

  componentDidMount() {
    axios.get(`/restaurants/${this.state.id()}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          numOfReviews: response.data.reviews.length,
          overall: response.data.rating.Overall,
          ratingList: response.data.rating,
          reviews: response.data.reviews,
        });

        const obj = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
        const reviewsList = response.data.reviews;

        const barRatings = reviewsList.reduce((acc, review) => {
          const key = review.individual_rating.Overall;
          // console.log(key)
          obj[key] += 1;
          return acc;
        }, obj)
        // console.log(obj);
        // console.log(barRatings)
        this.setState({
          barGraph: barRatings,
        });
        const noise = { Quiet: 0, Moderate: 0, Energetic: 0 }
        const noiseLevel = reviewsList.reduce((acc, review) => {
          const key = review.noise_level;
          noise[key] += 1;
          return acc
        }, noise)



        console.log(noise)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <ReviewsSummary>
          <ReviewsSummaryContainer>
            <ReviewsOverviewHeaderText>What {this.state.numOfReviews} People Are Saying</ReviewsOverviewHeaderText>
            <OverallRatingsReviewsContainer>
              <OverallRatingsNumbersContainer>
                <OverallRatingsText>Overall ratings and reviews</OverallRatingsText>
                <OverallRatingsTextTwo>Reviews can only be made by diners who have eaten at this restaurant</OverallRatingsTextTwo>
                <StarsAndRatingContainer>
                  <StarsContainer>
                    <Stars rating={this.state.overall} />
                  </StarsContainer>
                  <OverallNumberRating>{this.state.overall} based on recent ratings</OverallNumberRating>
                </StarsAndRatingContainer>
                <CategoryRatingsContainer>
                  <RatingsSummary ratings={this.state.ratingList} />
                </CategoryRatingsContainer>
                <NoiseContainer>
                  <NoiseAndResultContainer>
                    <IconDiv><i className="fas fa-signal"></i></IconDiv>
                    <NoiseResult>Noise - Moderate</NoiseResult>
                  </NoiseAndResultContainer>
                </NoiseContainer>
                <RecommendationsContainer>
                  <RecommendationResultContainer>
                    <ThumbsIconDiv><i className="far fa-thumbs-up"></i></ThumbsIconDiv>
                    <RecommendationResult>87% of people would recommend it to a friend</RecommendationResult>
                  </RecommendationResultContainer>
                </RecommendationsContainer>
              </OverallRatingsNumbersContainer>
              <BarGraphContainer>
                <BarGraph ratings={this.state.barGraph} reviews={this.state.reviews} />
              </BarGraphContainer>
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
  width: 640px;
`;

const ReviewsSummaryContainer = styled.div`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
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
  display: block;

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
  // padding-top: 0.5rem;
  // padding-bottom: 1rem;
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
  padding-top: 0.5rem;
  padding-bottom: 1rem;
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
  margin-right: 0.5rem;
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

const BarGraphContainer = styled.div`
   padding: 2rem 0 0;
   display: block;
`;