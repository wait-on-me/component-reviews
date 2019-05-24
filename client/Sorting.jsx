import React from 'react';
import styled from 'styled-components';

const SortingTools = (props) => {

  console.log(props.sortDisplay)
  return (
    <div>
      <SortText>Sort by</SortText>
      <SortContainer>

        <DropDownContainer onClick={props.onClick}>
          <Dropdownspan>Newest</Dropdownspan>
          <IconArrow><i className="fas fa-chevron-down"></i></IconArrow>
        </DropDownContainer>

        {props.sortDisplay ? (
          // console.log(props.sortDisplay)
          <DropDownOptionsContainer>
            <NewestOption>
              <NewestInput name="reviewSort" type="radio"></NewestInput>
              <NewestLabel>
                <NewSpan>Newest</NewSpan>
              </NewestLabel>
            </NewestOption>
            <HighestRatingOption>
              <HighestInput name="reviewSort" type="radio"></HighestInput>
            </HighestRatingOption>
            <LowestRatingOption>
              <LowestInput name="reviewSort" type="radio"></LowestInput>
            </LowestRatingOption>
          </DropDownOptionsContainer>
        ) :
          (
            null
          )
        }


      </SortContainer>
      <FilterText>Filters</FilterText>
    </div>
  )
};

export default SortingTools;

const SortText = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  display: flex;
  // font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  // -webkit-font-smoothing: antaliased;
`;

const SortContainer = styled.div`
  width: 18rem;
  margin: 0.5rem 0;
  padding: 0;
`;

// const DropDown = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 6px 0.25rem;
//   // font-size: 0.875rem;
//   // border-radius: 2px;
//   // border: 1px solid #d8d9db;
//   // cursor: pointer;
//   // box-sizing: border-box;
// `;

const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0.25rem;
  font-size: 0.875rem;
  border-radius: 2px;
  border: 1px solid #d8d9db;
  cursor: pointer;
  box-sizing: border-box;

`;

// const TopDisplay = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

const Dropdownspan = styled.span`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
  color: #6f737b;
`;

const IconArrow = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  back-ground-position: 50%;
  align: right;
  display: block;
  line-height: 1.63rem;
`;


const DropDownOptionsContainer = styled.div`
  display: none;
  position: absolute;
  background-color: #fff;
  width: 18rem;
  border-top: 0 none;
  font-size: 0.875rem;
  border-radius: 2px;
  border: 1px solid #d8d9db;
  cursor: pointer;
  box-sizing: border-box;
`;

const NewestOption = styled.div`
  padding: 0.5rem 0.25rem;
`;

const NewestInput = styled.input`
  display: none;
  box-sizing: border-box;
  padding: 0;
  line-height: normal;
  color: inherit;
  font: inherit;
`;

const NewestLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
`;

const NewSpan = styled.span`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
  color: #6f737b;
`;

const HighestRatingOption = styled.div`
  padding: 0.5rem 0.25rem;
`;

const HighestInput = styled.input`
  display: none;
  box-sizing: border-box;
  padding: 0;
  line-height: normal;
  color: inherit;
  font: inherit;
`;
const LowestRatingOption = styled.div`
  padding: 0.5rem 0.25rem;
`;

const LowestInput = styled.input`
  display: none;
  box-sizing: border-box;
  padding: 0;
  line-height: normal;
  color: inherit;
  font: inherit;
`;

const FilterText = styled(SortText)`
  display: flex;
`;