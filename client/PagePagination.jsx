import React from 'react';
import styled from 'styled-components';

class PagePagination extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
      <PageNavContainer>
        <PageDiv onClick={this.props.onPrevClick}>
          <LeftArrow><i class="fas fa-angle-left"></i></LeftArrow>
        </PageDiv>
        <PageDiv onClick={this.props.onClick}>
          <RightArrow><i class="fas fa-angle-right"></i></RightArrow>
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