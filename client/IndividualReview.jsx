import React from 'react';
import styled from 'styled-components';

import IndividualStars from './IndividualStars.jsx';
import IndividualRating from './IndividualRatings.jsx';

const IndividualReview = (props) => {


  console.log(props.review)
  const firstInit = props.review.first_name.charAt(0);
  const lastInit = props.review.last_name.charAt(0);
  const privacy = props.review.privacy
  const name = props.review.first_name + props.review.last_name.charAt(0);
  const username = props.review.username
  const city = props.review.location.split(',')[0];
  const reviewsWritten = props.review.reviews_written;
  const date = props.review.date.split('').slice(4, 15).join('');
  const reviewEntry = props.review.review_entry


  const iconDisplay = () => {
    if (privacy === true) {
      return 'OT';
    } else {
      return firstInit + lastInit;
    }
  }

  const displayName = () => {
    if (privacy === true) {
      return 'OpenTable' + ' ' + 'Diner';
    }
    return name;
  }



  return (
    <Review>

      <ReviewContainer>
        <UserInfoContainer>
          <UserIconDiv>
            <UserIcon>
              <UserInitial>{iconDisplay()}</UserInitial>
            </UserIcon>
          </UserIconDiv>
          <UserInfo>
            <NameSpan>

              <Name>{displayName()}</Name>
            </NameSpan>
          </UserInfo>
          <City>{city}</City>
          <UserReviewsWrittenDiv>
            <ReviewIcon><i className="far fa-comment-alt"></i></ReviewIcon>
            <ReviewNumber>{reviewsWritten} reviews</ReviewNumber>
          </UserReviewsWrittenDiv>
        </UserInfoContainer>
        <ReviewContextContainer>
          <IndividualRatingDiv>
            <StarsDateContainer>
              <IndividualStars review={props.review} />
              <Date>Dined on {date}</Date>
            </StarsDateContainer>
            <IndividualStarsContainer>
              <IndividualRating review={props.review} />
            </IndividualStarsContainer>
          </IndividualRatingDiv>
          <UserReview>
            <ReviewParagraph>{reviewEntry}</ReviewParagraph>
          </UserReview>
          <ReadMoreAndExtra>
            <ReadMoreDiv></ReadMoreDiv>
          </ReadMoreAndExtra>
        </ReviewContextContainer>
      </ReviewContainer>


    </Review>

  )
};

export default IndividualReview;

const Review = styled.div`
  display: flex;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px #d8d9db;
  color: #2d333f;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  margin-left: 1rem;
  width: 6rem;
  position: relative;
  flex: none;
`;

const UserIconDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  
`;

const UserIcon = styled.div`
  background: colorArray[3];
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d86441;
`;

const UserInitial = styled.div`
  color: #ffffff;
  font-weight: 500;
  text-transform: capitalize;
`;

const UserInfo = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  text-align: center;
  color: #2d333f;
  margin-bottom: 0.25rem;
  
  `;

const NameSpan = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  text-align: center;
`;

const Name = styled.span`
  font-weight: 500;
  font-size: 0.875rem;
  text-align: center;
  color: #2d333f;
  display: block;
  word-break: break-word;
`;

const City = styled(NameSpan)`
  line-height: 1.43;
  color: #6f737b;
  margin-bottom: 0.5rem;

`;

const UserReviewsWrittenDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.43;
  flex: none;
  white-space: nowrap;
  color: #6f737b;
`;

const ReviewIcon = styled.span`
  display: inline-block;
  position: relative;
  height: 16px;
  width: 16px;
  flex: none;
  margin-right: 0.25rem;
`;

const ReviewNumber = styled.span`
  font-size: 12px;
  font-weight: bold;
  line-height: 1.43;
  white-space: nowrap;
  color: #6f737b;
`;

const ReviewContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const IndividualRatingDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const StarsDateContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Date = styled(StarsDateContainer)`
  margin: 0 0.25rem;
  font-size: 0.875rem;
  line-height: 1.43;
  font-weight: 500;
`;

const IndividualStarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`;

const UserReview = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  max-height: calc(3rem * 1.5);
`;

const ReviewParagraph = styled.p`
  margin-bottom: 0;
  margin-top: 0;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: normal;
`;

const ReadMoreAndExtra = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ReadMoreDiv = styled.div`
`;

