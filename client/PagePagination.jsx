import React from 'react';
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
    let span = '...'
    

    if (currentPage === 1) {
      pageNavigation = (
      <div>  
        <Pages style={{border: '2px solid #da3743'}}><PageSpan onClick={this.props.handleClick}>{currentPage}</PageSpan></Pages>
        <AllPages><PageSpan onClick={this.props.handleClick}>{next}</PageSpan></AllPages>
        <AllPages><PageSpan onClick={this.props.handleClick}>{afterNextPg}</PageSpan></AllPages>
        <Dot><PageSpan onClick={this.props.handleClick}>{span}</PageSpan></Dot>
        <AllPages><PageSpan onClick={this.props.handleClick}>{numOfPages}</PageSpan></AllPages>
      </div>)
    } else if (currentPage === 2) {
      pageNavigation = (
        <div>
        <Pages><PageSpan onClick={this.props.handleClick}>{firstPage}</PageSpan></Pages>
        <AllPages style={{border: '2px solid #da3743'}}><PageSpan onClick={this.props.handleClick}>{currentPage}</PageSpan></AllPages>
        <AllPages><PageSpan onClick={this.props.handleClick}>{next}</PageSpan></AllPages>
        <Dot><PageSpan onClick={this.props.handleClick}>{span}</PageSpan></Dot>
        <AllPages><PageSpan onClick={this.props.handleClick}>{numOfPages}</PageSpan></AllPages>
        </div>
      )
    } else if (currentPage === 3) {
      pageNavigation = (
        <div>
        <Pages><PageSpan onClick={this.props.handleClick}>{firstPage}</PageSpan></Pages>
        <AllPages><PageSpan onClick={this.props.handleClick}>{previous}</PageSpan></AllPages>
        <AllPages style={{border: '2px solid #da3743'}}><PageSpan onClick={this.props.handleClick}>{currentPage}</PageSpan></AllPages>
        <AllPages><PageSpan onClick={this.props.handleClick}>{next}</PageSpan></AllPages>
        <Dot><PageSpan onClick={this.props.handleClick}>{span}</PageSpan></Dot>
        <AllPages><PageSpan onClick={this.props.handleClick}>{numOfPages}</PageSpan></AllPages>
        </div>
      )
    } else if ((currentPage >= 4) && (currentPage + 1 === numOfPages)) {
      pageNavigation = (
        <div>
        <Pages><PageSpan onClick={this.props.handleClick}>{firstPage}</PageSpan></Pages>
        <Dot><PageSpan onClick={this.props.handleClick}>{span}</PageSpan></Dot>
        <AllPages><PageSpan onClick={this.props.handleClick}>{previous}</PageSpan></AllPages>
        <AllPages style={{border: '2px solid #da3743'}}><PageSpan onClick={this.props.handleClick}>{currentPage}</PageSpan></AllPages>
        <AllPages><PageSpan onClick={this.props.handleClick}>{numOfPages}</PageSpan></AllPages>
        </div>
      )
    } else if (currentPage === lastPage) {
        pageNavigation = (
          <div>
          <Pages><PageSpan onClick={this.props.handleClick}>{firstPage}</PageSpan></Pages>
          <Dot><PageSpan onClick={this.props.handleClick}>{span}</PageSpan></Dot>
          <AllPages><PageSpan onClick={this.props.handleClick}>{beforePrevPg}</PageSpan></AllPages>
          <AllPages><PageSpan onClick={this.props.handleClick}>{previous}</PageSpan></AllPages>
          <AllPages style={{border: '2px solid #da3743'}}><PageSpan onClick={this.props.handleClick}>{numOfPages}</PageSpan></AllPages>
          </div>
        )
      } else if ((currentPage >= 4) && (currentPage <= lastPage - 3)) {
      pageNavigation = (
        <div>
        <Pages><PageSpan onClick={this.props.handleClick}>{firstPage}</PageSpan></Pages>
        <Dot><PageSpan onClick={this.props.handleClick}>{span}</PageSpan></Dot>
        <AllPages><PageSpan onClick={this.props.handleClick}>{previous}</PageSpan></AllPages>
        <AllPages style={{border: '2px solid #da3743'}}><PageSpan onClick={this.props.handleClick}>{currentPage}</PageSpan></AllPages>
        <AllPages><PageSpan onClick={this.props.handleClick}>{next}</PageSpan></AllPages>
        <Dot><PageSpan onClick={this.props.handleClick}>{span}</PageSpan></Dot>
        <AllPages><PageSpan onClick={this.props.handleClick}>{numOfPages}</PageSpan></AllPages>
        </div>
      )
    } else {
      if ((currentPage >= 4) && (currentPage > lastPage - 4)) {
      pageNavigation = (
        <div>
        <Pages><PageSpan onClick={this.props.handleClick}>{firstPage}</PageSpan></Pages>
        <Dot><PageSpan onClick={this.props.handleClick}>{span}</PageSpan></Dot>
        <AllPages><PageSpan onClick={this.props.handleClick}>{previous}</PageSpan></AllPages>
        <AllPages style={{border: '2px solid #da3743'}}><PageSpan onClick={this.props.handleClick}>{currentPage}</PageSpan></AllPages>
        <AllPages><PageSpan onClick={this.props.handleClick}>{next}</PageSpan></AllPages>
        <AllPages><PageSpan onClick={this.props.handleClick}>{numOfPages}</PageSpan></AllPages>
        </div>
      )
     } 
    }

    return (
      <PageNavContainer>
        <PageDiv onClick={this.props.onPrevClick}>
          <LeftArrow><i className="fas fa-angle-left"></i></LeftArrow>
        </PageDiv>
        {/* <Pages>
          <PageSpan>{firstPage}</PageSpan>
        </Pages> */}
        {pageNavigation}
        {/* <AllPages>
          <PageSpan>{numOfPages}</PageSpan>
        </AllPages> */}
        <PageDiv onClick={this.props.onClick}>
          <RightArrow><i className="fas fa-angle-right"></i></RightArrow>
        </PageDiv>
      </PageNavContainer>

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
  border: solid 1px #d8d9b;
  margin-left: calc(0.5rem - 1px);
  margin-right: calc(0.5rem - 1px);
`;

const Dot = styled(RightArrow)`
  border: none;
  text-align: center;
`;