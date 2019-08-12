import React from 'react';
import styled from 'styled-components';

import SortingTools from './Sorting.jsx';
import ReviewList from './ReviewList.jsx';
import PagePagination from './PagePagination';

class ReviewFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPage: 1,
      currentPage: 1,
      previous: null,
      next: 2,
      beginning: 0,
      end: 10,
      lastPage: Math.ceil(this.props.reviewList.length / 10),

    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handlePrevClick() {
    const { currentPage } = this.state;
    event.preventDefault();

    if (currentPage === 1) {
      let previous = 1;
      let currPg = currentPage;
      let next = currentPage + 1;
      let beginning = this.state.beginning
      let end = this.state.beginning + 10;

      this.setState({
        currentPage: currPg,
        previous: previous,
        next: next,
        beginning: beginning,
        end: end,

      });
    } else {
      if (currentPage >= 2) {
        let previous = currentPage - 2;
        let currPg = currentPage - 1;
        let next = currentPage;
        let beginning = this.state.beginning - 10
        let end = this.state.end - 10;

        this.setState({
          currentPage: currPg,
          previous: previous,
          next: next,
          beginning: beginning,
          end: end,
        });
      }
    }
    console.log('clicked')
  }

  handleNextClick() {
    let length = Math.ceil(this.props.reviewList.length / 10)
    console.log('tes', length)
    event.preventDefault();

    if (this.state.currentPage === length) {
      let previous = this.state.currentPage - 1;
      let currentPg = this.state.currentPage;
      let next = length;
      let beginning = this.state.beginning + 0;
      let end = this.state.end + 0;

      this.setState({
        currentPage: currentPg,
        previous: previous,
        next: next,
        beginning: beginning,
        end: end,
        lastPage: length,
      });
    } else {
      if (this.state.currentPage >= 1) {
        let previous = this.state.currentPage;
        let currentPg = this.state.currentPage + 1;
        let next = this.state.currentPage + 2;
        let beginning = this.state.beginning + 10;
        let end = this.state.end + 10;

        //  console.log('length', length)
        this.setState({
          currentPage: currentPg,
          previous: previous,
          next: next,
          beginning: beginning,
          end: end,
          lastPage: length,

        });
      }
    }
    console.log('click works')
  }


  handleClick(e) {
    // event.preventDefault();
    // let current = Number(e.target.innerHTML);
    let previousPg = Number(e.target.innerHTML) - 1;
    let begin = previousPg * 10;
    let nextPg;

    if (this.state.next === this.state.lastPage) {
      nextPg = Number(e.target.innerHTML) + 0
    } else {
      nextPg = Number(e.target.innerHTML) + 1
    }

    this.setState({
      currentPage: Number(e.target.innerHTML),
      previous: previousPg,
      next: nextPg,
      beginning: begin,
      end: Number(e.target.innerHTML) * 10,
    })
    console.log('clicked', e.target.innerHTML)
  }

  render() {

    let beg = this.state.beginning;
    let end = this.state.end;
    let allReviews = this.props.reviewList;
    let paginated = allReviews.slice(beg, end);



    return (
      <ReviewFeedContainer>
        <SortFilterToolBar>
          <SortingTools onClick={this.props.onClick} sortDisplay={this.props.sortMenuDisplay} sortingBy={this.props.sortingBy} onChange={this.props.onChange} onClickChange={this.props.onClickChange} checkBox={this.props.checkBox} showFilterModal={this.props.showFilterModal} filterCheckbox={this.props.filterCheckbox} onFilterChange={this.props.onFilterChange} idForBar={this.props.idForBar} handleCheck={this.props.handleCheck} />

        </SortFilterToolBar>
        <ReviewList reviews={paginated} />
        <PagePagination onClick={this.handleNextClick} onPrevClick={this.handlePrevClick} numOfPages={this.props.numOfPages} firstPage={this.state.firstPage} currentPage={this.state.currentPage} lastPage={this.state.lastPage} handleClick={this.handleClick} />
      </ReviewFeedContainer>
    );

  }

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
