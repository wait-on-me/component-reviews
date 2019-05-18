import React from 'react';
import styled from 'styled-components';

const SortingTools = (props) => {
  return (
    <div>
      <SortText>Sort by</SortText>
      <SortContainer>
        {/* <Dropdown>
          <DropdownButton></DropdownButton>
          <DropDownContent>
            
          </DropDownContent>
        </Dropdown> */}
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

const FilterText = styled(SortText)`
  display: flex;
`;