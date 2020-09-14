import React, { useEffect } from 'react';
import { Card } from 'reactstrap';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
// import CardComponent from './CardComponent';
// import CardBodyWrapper from './CardBodyWrapper';
import CardTextWrapper from './CardTextWrapper';
import CardTitleWrapper from './CardTitleWrapper';
import ButtonWrapper from './ButtonWrapper';
// import UserDetails from '../UserDetails';
//import UpdateUserProfile from './UpdateUserProfile';
import RowWrapper from './RowWrapper';
import ColumnWrapper from './ColumnWrapper';
import FormLabel from './FormLabel';
import { getUserProfile } from '../actions/userprofileAction';
const UserProfile = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const { profile } = useSelector((state) => state.userprofileReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile(userDetails.token));
  }, []);
  console.log('UserProfileData', profile, userDetails.token);
  const pageshow = () => {
    <Redirect to="/products" />;
  };

  let userprofile_content = [];
  userprofile_content.push(<CardTitleWrapper title={<h1>{'USER PROFILE'}</h1>} />);
  userprofile_content.push(<FormLabel labelText={'First Name'} />);
  userprofile_content.push(<CardTextWrapper text={profile.first_name} />);
  userprofile_content.push(<FormLabel labelText={'Last Name'} />);
  userprofile_content.push(<CardTextWrapper text={profile.last_name} />);
  userprofile_content.push(<FormLabel labelText={'Contact'} />);
  userprofile_content.push(<CardTextWrapper text={profile.mobile} />);
  userprofile_content.push(<FormLabel labelText={'State'} />);
  userprofile_content.push(<CardTextWrapper text={profile.state} />);
  userprofile_content.push(<FormLabel labelText={'City'} />);
  userprofile_content.push(<CardTextWrapper text={profile.city} />);
  userprofile_content.push(<FormLabel labelText={'Country'} />);
  userprofile_content.push(<CardTextWrapper text={profile.country} />);
  userprofile_content.push(<FormLabel labelText={'Address'} />);
  userprofile_content.push(<CardTextWrapper text={profile.address} />);
  return (
    <div>
      <RowWrapper
        data={
          <ColumnWrapper sm={{ size: 6, offset: 3 }} data={<Card> {userprofile_content}</Card>} />
        }
      />
      <ButtonWrapper buttonText={'Edit'} onClick={pageshow} />
      {/* </Card> */}
    </div>
  );
};

export default UserProfile;
