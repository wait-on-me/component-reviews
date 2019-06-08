import React from 'react';
import styled, { css } from 'styled-components';

import IndividualStars from './IndividualStars.jsx';
import IndividualRating from './IndividualRatings.jsx';

class IndividualReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      showReportModal: false,
    };

    this.showMore = this.showMore.bind(this);
    this.toggleReportModal = this.toggleReportModal.bind(this);
  }

  showMore() {
    event.preventDefault();
    this.setState({ expand: !this.state.expand });
  }

  toggleReportModal () {
    event.preventDefault();
    this.setState(state => ({
      showReportModal: !this.state.showReportModal
    }));
  }

  // console.log(props.review)

  render() {
    const firstInit = this.props.review.first_name.charAt(0);
    const lastInit = this.props.review.last_name.charAt(0);
    const privacy = this.props.review.privacy
    const name = this.props.review.first_name + this.props.review.last_name.charAt(0);
    const username = this.props.review.username
    const city = this.props.review.location.split(',')[0];
    const reviewsWritten = this.props.review.reviews_written;
    console.log(new window.Date(this.props.review.date))
    const date = this.props.review.date.split('').slice(4, 15).join('');
    const reviewEntry = this.props.review.review_entry

    const colorArray = ['DeepPink', 'BlueViolet', 'DeepSkyBlue', 'Chocolate']

    const getRandomColor = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    }

    const color = colorArray[getRandomColor(4)]

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

    const { expand } = this.state;
    // const showMoreText = expand ? '+ Read More' : 'Read Less';
    let readMoreDiv;

    if (expand === false) {
      readMoreDiv = (<UserReview><ReviewParagraph>{reviewEntry}</ReviewParagraph></UserReview>)
    } else {
      readMoreDiv = (<UserReviewExpanded><ReviewParagraph>{reviewEntry}</ReviewParagraph></UserReviewExpanded>)
    }

    let readTag;
    let reviewArr = reviewEntry.split('');
    // console.log(reviewArr)

    if (reviewArr.length > 193) {
      readTag = (<ReadTag href="#" onClick={this.showMore}>
        {expand ? '- Read Less' : '+ Read More'}
      </ReadTag>)
    } else {
      readTag = '';
    }

    return (
      <Review>

        <ReviewContainer>
          <UserInfoContainer>
            <UserIconDiv>
              <UserIcon style={{ background: colorArray[getRandomColor(4)] }}>
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
                <IndividualStars review={this.props.review} />
                <Date>Dined on {date}</Date>
              </StarsDateContainer>
              <IndividualStarsContainer>
                <IndividualRating review={this.props.review} />
              </IndividualStarsContainer>
            </IndividualRatingDiv>
            {readMoreDiv}
            <ReadMoreAndExtra>
              <ReadMoreDiv >
                {readTag}
                {/* <ReadTag href="#" onClick={this.showMore}>
                  {expand ? '- Read Less' : '+ Read More'}
                </ReadTag> */}
              </ReadMoreDiv>
              <ReportAndHelpful>
                <Report onClick={this.toggleReportModal} >
                  <Icon><i className="far fa-flag"></i></Icon>
                  <Text>Report</Text>
                </Report>
                <Helpful>
                  <Icon><i className="far fa-caret-square-up"></i></Icon>
                  <Text>Helpful</Text>
                </Helpful>
                {this.state.showReportModal === true ? (
                <ReportModal>
                  <ReportHeadlineContainer>
                    <ReportHeadline>Report this review as inappropriate?</ReportHeadline>
                  </ReportHeadlineContainer>
                  <ReportTextContainer>
                    <ReportText>If you believe this review should be removed from WaitOnMe, please let us know and someone will investigate.</ReportText>
                  </ReportTextContainer>
                  <Form>
                    <FormInput type="hidden" name="reviewId" value="formVal"></FormInput>
                    <FormText placeholder="Tell us why you find the review inappropriate"></FormText>
                    <ButtonDiv>
                      <ReportButton>Report</ReportButton>
                      <CancelButton onClick={this.toggleReportModal}>Cancel</CancelButton>
                    </ButtonDiv>  

                  </Form>
                </ReportModal>

                ) : 
                  (
                    null
                  )
                }
              </ReportAndHelpful>
            </ReadMoreAndExtra>
          </ReviewContextContainer>
        </ReviewContainer>

      </Review >

    );
  }

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
  -webkit-line-clamp: 3;
  max-height: calc(3rem * 1.5);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserReviewExpanded = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  height: auto;
  overflow: visible;
  
`;

// const UserReview = css`
//   margin-top: 1rem;
//   margin-bottom: 0.5rem;
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 3;

//   overflow: ${props => (props.expand ? 'hidden' : 'visible')};
//   text-overflow: ${props => (props.expand ? 'ellipsis' : 'none')};
//   height: auto;
// `;

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
  // margin-top: 1rem;
`;

const ReadMoreDiv = styled.div`
  display: block;

 
`;

const ReadTag = styled.a`
  color: #da3743;
  tex-decoration: none;
  font-weight: normal;
  font-size: inherit;
  height: 24px;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  background-color: transparent;
  cursor: pointer;

`;

const ReportAndHelpful = styled.div`
  display: flex;
  position: relative;
  align-self: flex-start;
`;

const Report = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  :hover {
    color: #da3743
  }
`;

const Icon = styled.div`
  height: 1rem;
  width: 1rem;
`;

const Text = styled.div`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
  color: #6f737b;
  cursor: pointer;
  :hover {
    color: #da3743;
  }
`;

const Helpful = styled(Report)`
`;

const ReportModal = styled.div`
  position: absolute;
  background: #ffffff;
  z-index: 1000;
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  padding-top: 1rem;
  box-shadow: 0 2px 4px rgba(51,51,51,.2);
  bottom: 2.5rem;
  right: -8.5rem;
  margin-left: -11rem;
  max-width: 25rem;
`;

const ReportHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: flex-end;
  background-color: #ffffff;
  line-height: 2rem;
  border-top-left-radius: 2px;
  border-top-right-radius 2px;
  text-align: center;
  font-family:  BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
`;

const ReportHeadline = styled.div`
  font-size: 1.125rem;
  justify-content: center;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const ReportTextContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  height: auto;
  //width: 25rem;
`;    

const ReportText = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  display: flex;
`;

const Form = styled.form`
  margin-bottom: 1rem;
`;

const FormInput = styled.input`
  line-height: normal;
`;

const FormText = styled.textarea`
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  // padding: 0.5rem;
  resize: none;
  overflow: auto;
  -webkit-appearance: textarea;
  background-color: white;
  flex-direction: column;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  border-width: 1px;
  border-style: solid;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  font-size: 1rem;
  line-height: 1.5;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 1rem;
  padding-left: 1rem;
`;

const ReportButton = styled.button`
  padding: .75rem 1rem;
  text-decoration: none;
  background-color: #da3743;
  color: #ffffff;
  border: none;
  font-size: 1rem;
  line-height: 1.5;
  width: 18rem;
  font-weight: 500;
  border-radius: 2px;
  display: inline-block;
  box-sizing: border-box;
  margin-right: 1rem;
`;

const CancelButton = styled(ReportButton)`
  margin-right: 0;
  padding: .75rem 1rem;
  border: 1px solid #d8d9db;
  background-color: #ffffff;
  color: #2d333f;
  text-decoration: none;
`;

// const CancelButton = styled.div`
//   margin-right: 0;
//   padding: .75rem 1rem;
//   border: 1px solid #d8d9db;
//   background-color: #ffffff;
//   color: #2d333f;
//   text-decoration: none;
// `;