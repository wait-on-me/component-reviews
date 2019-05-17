import React from 'react';
import Bar from './IndividualBar.jsx';

import styled from 'styled-components';

const BarGraph = (props) => {
  const barRatings = Object.keys(props.ratings).sort().reverse();
  // console.log(barRatings)

  console.log(props.ratings)
  
  return (
    <div>
      {barRatings.map((rating) =>
        <div>

          <Bar value={rating} percentage={props.ratings[rating]} 
          numOfReviews={props.reviews} />
        </div>
      )}
    </div>
  );
}
export default BarGraph;