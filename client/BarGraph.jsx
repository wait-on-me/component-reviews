import React from 'react';
import Bar from './IndividualBar.jsx';

import styled from 'styled-components';

const BarGraph = (props) => {
  const barRatings = Object.keys(props.ratings).sort().reverse();
  // console.log(barRatings)

  // console.log(props.ratings)

  return (
    <div >
      {barRatings.map((rating, index) =>
        <BarDiv  >
          <Bar key={index} value={rating} percentage={props.ratings[rating]}
            numOfReviews={props.reviews} id={rating} onClick={props.onClick} />
        </BarDiv>
      )}
    </div>
  );
}
export default BarGraph;

const BarDiv = styled.div`
  margin: 0;
  width: 16rem;
  cursor: pointer;
`;