import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getUserProfile } from '../actions/userprofileAction';
import NavigationBarComponent from './NavigationBarComponent';
import Footer from './Footer';
import userprofileupdateReducer from '../reducers/userprofileupdateReducer';
import { setUpdated, setFormState } from '../actions/formActions';
import ContainerWrapper from './ContainerWrapper';
import RenderData from './RenderData';
import CartHeader from './CartHeader';
import ButtonWrapper from './ButtonWrapper';
import RowWrapper from './RowWrapper';
import alertReducer from '../reducers/alertReducer';
import { alertMessage } from '../actions/alertActions';
import AlertWrapper from '../components/AlertWrapper';
import ColumnWrapper from './ColumnWrapper';
import ImageComponent from './ImageComponent';
import './CartItem.css';

const UserProfile = () => {
  // const { userDetails } = useSelector((state) => state.loginReducer);
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  const { profile } = useSelector((state) => state.userprofileReducer);
  const dispatch = useDispatch();
  const { alert, alertText, color } = useSelector((state) => state.alertReducer);
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

  if (!userDetails) {
    return <Redirect to="/login" />;
  }

  let userprofile_content = [];

  let editButton = (
    <RowWrapper
      data={
        <ButtonWrapper
          style="m-auto"
          onClick={() => {
            userProfileUpdateDispatch(setFormState(profile));
          }}
          buttonText={'Edit Profile'}
        />
      }
    />
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
    <AlertWrapper className="text-center fixed-top" color={color} isOpen={alert} data={alertText} />
  );
  const profileImage =
    profile.profile_image !== ''
      ? `${process.env.REACT_APP_SERVER_URL}${profile.profile_image}`
      : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  return (
    <>
      <NavigationBarComponent className="navClass fixed-top" expand="md" />
      <CartHeader header={`Welcome ${profile.first_name} ${profile.last_name}`} />
      <ContainerWrapper
        data={
          <RowWrapper
            data={
              <>
                <ColumnWrapper
                  xs={9}
                  sm={9}
                  lg={9}
                  className={'pl-0 ml-0'}
                  data={userprofile_content}
                />
                <ColumnWrapper
                  xs={3}
                  sm={3}
                  lg={3}
                  data={
                    <ImageComponent
                      src={profileImage}
                      className={'image_size'}
                      alt="profile image"
                    />
                  }
                />
              </>
            }
          />
        }
      />

      <Footer />
    </>
  );
};

export default UserProfile;
