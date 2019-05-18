import React from 'react';
import styled from 'styled-components';
// import ReviewList from './ReviewList';

const IndividualReview = (props) => {


  console.log(props.review)
  const firstInit = props.review.first_name.charAt(0);
  const lastInit = props.review.last_name.charAt(0);
  const privacy = props.review.privacy
  const name = props.review.first_name + props.review.last_name.charAt(0);
  const username = props.review.username

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
        </UserInfoContainer>
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
        background: #d86441;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
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