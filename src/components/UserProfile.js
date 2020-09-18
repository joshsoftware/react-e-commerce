import React, { useEffect } from 'react';
import { Card, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserProfile } from '../actions/userprofileAction';
import NavigationBarComponent from './NavigationBarComponent';
import Footer from './Footer';
import userprofileupdateReducer from '../reducers/userprofileupdateReducer';
import { setUpdated } from '../actions/formActions';
import ContainerWrapper from './ContainerWrapper';
import RenderData from './RenderData';
import CartHeader from './CartHeader';
import ButtonWrapper from './ButtonWrapper';
import RowWrapper from './RowWrapper';

const UserProfile = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const { profile } = useSelector((state) => state.userprofileReducer);
  const dispatch = useDispatch();
  const userProfileUpdateDispatch = useDispatch(userprofileupdateReducer);
  userProfileUpdateDispatch(setUpdated(false));
  useEffect(() => {
    dispatch(getUserProfile(userDetails.token));
  }, []);
  if (!userDetails.token) {
    return <Redirect to="/login" />;
  }
  console.log('profile', profile);

  let userprofile_content = [];
  let editButton = (
    <RowWrapper data={<ButtonWrapper style="m-auto" buttonText={'Edit Profile'} />} />
  );
  userprofile_content.push(<RenderData label="Email " userdata={profile.email} />);
  userprofile_content.push(
    <RenderData
      label="Country "
      userdata={profile.country === '' ? 'Not Selected' : profile.country}
    />
  );
  userprofile_content.push(
    <RenderData label="State " userdata={profile.state === '' ? 'Not Selected' : profile.state} />
  );
  userprofile_content.push(
    <RenderData label="City " userdata={profile.city === '' ? 'Not Selected' : profile.city} />
  );
  userprofile_content.push(
    <RenderData
      label="Address "
      userdata={profile.address === '' ? 'Not Selected' : profile.address}
    />
  );
  return (
    <>
      <NavigationBarComponent className="navClass fixed-top" expand="md" />
      <CartHeader header={`Welcome ${profile.first_name} ${profile.last_name}`} />
      <ContainerWrapper data={userprofile_content} />
      <Link className={'bg-dark text-white'} to="/profile/update">
        {editButton}
      </Link>

      <Footer />
    </>
  );
};

export default UserProfile;
