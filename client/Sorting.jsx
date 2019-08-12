import React from 'react';
import styled from 'styled-components';

const SortingTools = (props) => {

  
  let filterContainer;
  
  if (props.showFilterModal === true) {
    filterContainer = (
    <GoodForGroups>
          <FilterInput id="filterby" type="checkbox" default={props.filterCheckbox} onChange={props.onFilterChange} ></FilterInput>
          <FilterLabel htmlFor="filterby">
          {props.filterCheckbox === true ? (
            <i className="fas fa-check-square" style={{color: '#da3743'}}></i>
          ) : (<i className="far fa-square"></i>)}
          <FilterSpan>{props.idForBar} stars</FilterSpan>
          </FilterLabel>
    </GoodForGroups>)
  } else {
    filterContainer = null;
  
  }
  console.log('fsfs', props.showFilterModal)


  // console.log(props.sortDisplay)
  return (
    <div>
      <SortText>Sort by</SortText>
      <SortContainer>

        <DropDownContainer onClick={props.onClick} isOpen={props.sortDisplay}>
          <Dropdownspan>{props.sortingBy}</Dropdownspan>
          <IconArrow><i className="fas fa-chevron-down"></i></IconArrow>
        </DropDownContainer>
        {props.sortDisplay === true ? (
          // console.log(props.sortDisplay)
          <DropDownOptionsContainer>
            <Option>
              <Input id="newest" name="reviewSort" type="radio" value="Newest" onChange={props.onChange}></Input>
              <Label htmlFor="newest">
                <Span>Newest</Span>
              </Label>
            </Option>
            <Option>
              <Input id="highest" name="reviewSort" type="radio" onChange={props.onChange} value="Highest"></Input>
              <Label htmlFor="highest">
                <Span>Highest</Span>
              </Label>
            </Option>
            <Option>
              <Input id="lowest" name="reviewSort" type="radio" onChange={props.onChange} value="Lowest"></Input>
              <Label htmlFor="lowest">
                <Span>Lowest</Span>
              </Label>
            </Option>
          </DropDownOptionsContainer>
        ) :
          (
            null
          )
        }
      </SortContainer>
      <FilterText>Filters</FilterText>
      <FilterOptionContainer>
          {filterContainer} 
        
        <GoodForGroups>
          <FilterInput id="goodforgroups" type="checkbox" default={props.checkBox} onChange={props.onClickChange} onClick={props.handleClick} ></FilterInput>
          <FilterLabel htmlFor="goodforgroups">
          {props.checkBox === true ? (
            <i className="fas fa-check-square" style={{color: '#da3743'}}></i>
          ) : (<i className="far fa-square"></i>)}
          <FilterSpan>Good For Groups</FilterSpan>
          </FilterLabel>
        </GoodForGroups>
      </FilterOptionContainer>

    </div>
  )
};

export default SortingTools;

const SortText = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  display: flex;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antaliased;
`;

const SortContainer = styled.div`
  width: 18rem;
  margin: 0.5rem 0;
  padding: 0;
`;

const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0.25rem;
  font-size: 0.875rem;
  border-radius: 2px;
  border: 1px solid #d8d9db ;
  cursor: pointer;
  box-sizing: border-box;
  &: hover {
    border: 2px solid #da3743;
    padding: 5px calc(0.25rem - 1px);
  }

`;

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
  position: absolute;
  z-index: 1;
  background-color: #fff;
  width: 18rem;
  border-top: 0 none;
  font-size: 0.875rem;
  border-radius: 2px;
  border: 1px solid #d8d9db;
  cursor: pointer;
  box-sizing: border-box;
`;

const Option = styled.div`
  padding: 0.5rem 0.25rem;
  display: flex;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 0;
  line-height: normal;
  color: inherit;
  font: inherit;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
`;

const Span = styled.span`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
  color: #6f737b;
 
`;

const FilterText = styled(SortText)`
  display: flex;
`;

const FilterOptionContainer = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 1rem;
`;

const GoodForGroups = styled.span`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  
`;

const FilterInput = styled.input`
  display: none;
  box-sizing: border-box;
  padding: 0;
  line-height: normal;
  margin: 0; 
`;

const FilterLabel = styled.label`
  display: inline-flex;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  // border: 1px solid #d8d9db;
  background: none; 
  box-sizing: border-box;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: .125rem;
  padding: calc(.5rem - 1px);
  border: ${props => props.checkBox === true ? '2px solid #da3743' : '1px solid #d8d9db'};
  : hover {
    border: 2px solid #da3743;
  }
`;

const FilterSpan = styled(Span)`
  margin-left: 1rem;
`