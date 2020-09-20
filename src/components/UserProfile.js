import React, { useEffect } from 'react';
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
import alertReducer from '../reducers/alertReducer';
import { alertMessage } from '../actions/alertActions';
import AlertWrapper from '../components/AlertWrapper';

const UserProfile = () => {
  const { userDetails } = useSelector((state) => state.loginReducer);
  const { profile } = useSelector((state) => state.userprofileReducer);
  const dispatch = useDispatch();
  const { alert, alertText } = useSelector((state) => state.alertReducer);
  const alertDispatch = useDispatch(alertReducer);

  const userProfileUpdateDispatch = useDispatch(userprofileupdateReducer);
  userProfileUpdateDispatch(setUpdated(false));
  const timeOutFunction = async () => {
    setTimeout(() => {
      alertDispatch(alertMessage({ alert: false, alertText: '' }));
    }, 2000);
  };
  useEffect(() => {
    timeOutFunction();
  }, [alert]);

  useEffect(() => {
    dispatch(getUserProfile(userDetails.token));
  }, []);

  if (!userDetails.token) {
    return <Redirect to="/login" />;
  }

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
  userprofile_content.push(
    <Link className={'bg-dark text-white'} to="/profile/update">
      {editButton}
    </Link>
  );
  userprofile_content.push(
    <AlertWrapper className="text-center fixed-top" color="info" isOpen={alert} data={alertText} />
  );
  return (
    <>
      <NavigationBarComponent className="navClass fixed-top" expand="md" />
      <CartHeader header={`Welcome ${profile.first_name} ${profile.last_name}`} />
      <ContainerWrapper data={userprofile_content} />

      <Footer />
    </>
  );
};

export default UserProfile;
