import React, { Fragment } from 'react';
import styled from 'styled-components';



class PagePagination extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {

    let { firstPage, numOfPages, currentPage, previous, next, beginning, end, lastPage } = this.props;
    let pageNavigation;
    let afterNextPg = next + 1;
    let beforePrevPg = previous - 1;

    return (
      <PageNavContainer>
        <PageDiv onClick={this.props.onPrevClick}>
          <LeftArrow><i className="fas fa-angle-left"></i></LeftArrow>
        </PageDiv>
        {
          new Array(numOfPages).fill(0).map((_, index) => {
            const value = index + 1
            const isSelected = currentPage === value
            const isFirstPage = value === firstPage
            const isLastPage = value === numOfPages
            let isWithinRange = false
            let shouldShowRightDots = false
            let shouldShowLeftDots = false
            if (value === currentPage + 1 || value === currentPage - 1) {
              isWithinRange = true
            }
            if (currentPage === firstPage && value === currentPage + 2) {
              isWithinRange = true
            }
            if (currentPage === numOfPages && value === currentPage - 2) {
              isWithinRange = true
            }
            if (!isFirstPage && !isLastPage && !isWithinRange && !isSelected) {
              return null
            }

            // Will render the dots if the number is bigger that the firstPage + 2 
            // eg. firstPage = 1 currentPage = 5
            if (isFirstPage && currentPage > firstPage + 2) {
              shouldShowRightDots = true
            }
            // Will render the dots if the number is less number of pages -2 
            // eg. lastpage = 10 currentPage = 5
            if (isLastPage && currentPage < numOfPages - 2) {
              shouldShowLeftDots = true
            }

            return <Fragment key={value}>
              {shouldShowLeftDots ? <Dot><PageSpan>...</PageSpan></Dot> : null}
              <AllPages key={value} isSelected={isSelected}>
                <PageSpan onClick={this.props.handleClick}>{value}</PageSpan></AllPages>
              {shouldShowRightDots ? <Dot><PageSpan>...</PageSpan></Dot> : null}
            </Fragment>

          })
        }
        <PageDiv onClick={this.props.onClick}>
          <RightArrow><i className="fas fa-angle-right"></i></RightArrow>
        </PageDiv>
      </PageNavContainer >

    )
  }
};


export default PagePagination;

const PageNavContainer = styled.div`
  width: 640px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  height: 2rem;
  margin-bottom: 50px;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antaliased;
`;

const PageDiv = styled.div`

`;

const LeftArrow = styled.div`
  border-radius: 5000px;
  border: solid 1px #d8d9db;
  margin-left: calc(0.5rem - 1px);
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 0.5rem;
  height: 2rem;
  min-width: 2rem;
  cursor: pointer;
`;

const RightArrow = styled.div`
  border-radius: 5000px;
  border: solid 1px #d8d9db;
  margin-left: calc(0.5rem - 1px);
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 0.5rem;
  height: 2rem;
  min-width: 2rem;
  cursor: pointer;
`;

const Pages = styled(RightArrow)`
  margin-left: calc(0.5rem - 2px);
  margin-right: calc(0.5rem - 2px);
`;

const PageSpan = styled.span`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const AllPages = styled(RightArrow)`
  border-radius: 5000px;
  border: ${(props) => {
    return props.isSelected ? '2px solid #da3743' : 'solid 1px #d8d9b;'
  }}
  margin - left: calc(0.5rem - 1px);
margin - right: calc(0.5rem - 1px);
`;

const Dot = styled(RightArrow)`
border: none;
text - align: center;
`;