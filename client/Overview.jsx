import React from 'react';
import RatingsSummary from './RatingsSummary.jsx';
import BarGraph from './BarGraph.jsx';
import Stars from './OverallStars.jsx';
import ReviewFeed from './ReviewFeed.jsx';
import PagePagination from './PagePagination.jsx';

import styled from 'styled-components';
const axios = require('axios');

const sortByDate = (a, b) => {
  const dateA = new Date(a.date)
  const dateB = new Date(b.date)

  return dateB.getTime() - dateA.getTime()
}

const sortByRankingHighest = (a, b) => {
  return b.individual_rating.Overall - a.individual_rating.Overall;
};

const sortByRankingLowest = (a, b) => {
  return a.individual_rating.Overall - b.individual_rating.Overall;
};

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: () => Math.floor(Math.random() * 100),
      numOfReviews: 0,
      overall: 0,
      ratingList: {},
      reviews: [],
      barGraph: {},
      noiseLevel: '',
      recommend: 0,
      idForBar: null,
      filteredArray: [],
      toggleSortmenu: false,
      sortingBy: 'Newest',
      sortingArray: [],
      toggleFilter: false,
      numOfPages: null,
      checkBox: false,
      showFilterModal: false,
      filterCheckbox: false,
      filters: [],
    }
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleSortClick = this.handleSortClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleToggleFilter = this.handleToggleFilter.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleFilterCheck = this.handleFilterCheck.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  // handle clicks for selecting review ratings 
  handleFilterClick(id) {
    const clickedId = Number(id);
    const checkBox = this.state.checkBox;

    // this.applyFilter({ checkBox, idForBar: clickedId })
    const filter = { checkBox, idForBar: clickedId };
    this.applyFilter(filter)
  }

  // handle clicks for selecting good for group 
  handleCheck() {
    const { checkBox, idForBar } = this.state
    // this.applyFilter({ checkBox: !checkBox, idForBar })
    const filter = { checkBox: !checkBox, idForBar }
    this.applyFilter(filter)
  }

  // handle clicks for unselecting a review rating filter
  handleFilterCheck() {
    event.preventDefault();
    const { checkBox } = this.state
    const filter = { checkBox: checkBox, idForBar: null }
    this.applyFilter(filter)
  }

  //applyFilter({checkBox, idForBar})  // also gives access the values in object on line 89
  applyFilter(filter) {
    const checkBox = filter.checkBox
    const idForBar = filter.idForBar
    if (!checkBox && !idForBar) {
      this.setState({
        filterCheckbox: !this.state.filterCheckbox,
        showFilterModal: !this.state.showFilterModal,
        numOfPages: Math.ceil(this.state.reviews.length / 10),
        filteredArray: this.state.reviews,
        checkBox
        //checkBox: checkBox
      })
    }

    let filteredRatings = this.state.reviews.filter(review => {
      let shouldShowThisReview = true;
      if (idForBar) {
        shouldShowThisReview = review.individual_rating.Overall === idForBar // 4
        // true
      }

      if (checkBox && shouldShowThisReview) {
        shouldShowThisReview = review.recommendations.good_for_groups === true
      }

      return shouldShowThisReview;
    });

    let pages = Math.ceil(filteredRatings.length / 10);
    this.setState({
      filteredArray: filteredRatings,
      numOfPages: pages,
      filterCheckbox: Boolean(idForBar),
      showFilterModal: Boolean(idForBar),
      checkBox, //passing same value, can be written shorthand like this only if not changing values
      idForBar,
    });
  }


  componentDidMount() {
    axios.get(`/restaurants/${this.state.id()}`)
      .then((response) => {
        console.log(response.data);
        let pages = Math.ceil(response.data.reviews.length / 10);

        this.setState({
          numOfReviews: response.data.reviews.length,
          overall: response.data.rating.Overall,
          ratingList: response.data.rating,
          reviews: response.data.reviews,
          numOfPages: pages,
          // paginatedReviews: paginated,
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

        const level = (obj) => {
          let votedMost = 0
          let highest;
          for (let key in obj) {
            if (obj[key] > votedMost) {
              votedMost = obj[key];
              highest = key
            }
          }
          return highest;
        }

        const votedNoise = level(noise);
        console.log('test', votedNoise)
        // console.log(noise)
        // console.log('is working', level(noise))

        const recommendation = { true: 0, false: 0 }

        const recommendCount = reviewsList.reduce((acc, review) => {
          const val = review.would_recommend
          recommendation[val] += 1;
          return acc;
        }, recommendation);


        const recommendPercent = (Math.round((recommendation[true] / reviewsList.length) * 100));

        this.setState({
          noiseLevel: votedNoise,
          recommend: recommendPercent,

        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  handleToggleFilter() {
    event.preventDefault();
    this.setState(state => ({
      toggleFilter: !state.toggleFilter

    }));
  }

  handleSortClick() {
    event.preventDefault();
    this.setState(state => ({
      toggleSortmenu: !state.toggleSortmenu
    }));
  }

  handleOnChange(event) {
    this.setState({ sortingBy: event.target.value })
  }

  render() {
    let selectedBar = this.state.idForBar;
    let filterDisplay = this.state.filteredArray;
    let sortingBy = this.state.sortingBy
    let filterStatus = this.state.showFilterModal;
    let checkBox = this.state.checkBox;
    let display = this.state.reviews
    let uncheckFilter = this.state.filterCheckbox
    console.log('idForBar in render', selectedBar)


    console.log('test bar', selectedBar, filterStatus, checkBox)
    if (selectedBar !== null || filterStatus !== false || checkBox) {
      display = filterDisplay
    }
    console.log('display', display);

    let sortingFunction;
    if (sortingBy === 'Newest') {
      sortingFunction = sortByDate
    } else if (sortingBy === 'Highest') {
      sortingFunction = sortByRankingHighest
    } else {
      sortingFunction = sortByRankingLowest
    }
    display = display.sort((a, b) => {
      return sortingFunction(a, b)
    })

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
                    <NoiseResult>Noise - {this.state.noiseLevel}</NoiseResult>
                  </NoiseAndResultContainer>
                </NoiseContainer>
                <RecommendationsContainer>
                  <RecommendationResultContainer>
                    <ThumbsIconDiv><i className="far fa-thumbs-up"></i></ThumbsIconDiv>
                    <RecommendationResult>{this.state.recommend}% of people would recommend it to a friend</RecommendationResult>
                  </RecommendationResultContainer>
                </RecommendationsContainer>
              </OverallRatingsNumbersContainer>
              <BarGraphContainer>
                <BarGraph ratings={this.state.barGraph} reviews={this.state.numOfReviews} onClick={this.handleFilterClick} />
              </BarGraphContainer>
            </OverallRatingsReviewsContainer>
          </ReviewsSummaryContainer>
        </ReviewsSummary>
        <ReviewFeed reviewList={display} onClick={this.handleSortClick} sortMenuDisplay={this.state.toggleSortmenu} sortingBy={this.state.sortingBy} onChange={this.handleOnChange} toggleFilter={this.handleToggleFilter} numOfPages={this.state.numOfPages} onClickChange={this.handleCheck} checkBox={this.state.checkBox} showFilterModal={this.state.showFilterModal} filterCheckbox={this.state.filterCheckbox} onFilterChange={this.handleFilterCheck} idForBar={this.state.idForBar} handleCheck={this.handleCheck} />

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
  margin-bottom: 0.4rem;
  margin-left: 0.1rem;
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