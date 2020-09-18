import React, { useEffect } from 'react';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CardTitleWrapper from './CardTitleWrapper';
import RowWrapper from './RowWrapper';
import ColumnWrapper from './ColumnWrapper';
import FormLabel from './FormLabel';
import { getUserProfile } from '../actions/userprofileAction';
import NavigationBarComponent from './NavigationBarComponent';
import Footer from './Footer';
import userprofileupdateReducer from '../reducers/userprofileupdateReducer';
import { setUpdated } from '../actions/formActions';

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
  let userprofile_content = [];
  userprofile_content.push(
    <CardTitleWrapper title={<h1 className={'bg-dark text-white'}>{'USER PROFILE'}</h1>} />
  );
  userprofile_content.push(<FormLabel labelText={'First Name: ' + profile.first_name} />);
  userprofile_content.push(<FormLabel labelText={'Last Name: ' + profile.last_name} />);
  userprofile_content.push(<FormLabel labelText={'Email: ' + profile.email} />);
  userprofile_content.push(<FormLabel labelText={'Country: ' + profile.country} />);
  userprofile_content.push(<FormLabel labelText={'State: ' + profile.state} />);
  userprofile_content.push(<FormLabel labelText={'City: ' + profile.city} />);
  userprofile_content.push(<FormLabel labelText={'Address: ' + profile.address} />);
  return (
    <>
      <NavigationBarComponent color="dark" expand="md" />
      <div className="text-center p-5">
        <RowWrapper
          data={
            <ColumnWrapper
              sm={{ size: 6, offset: 3 }}
              data={<Card className={'border'}> {userprofile_content}</Card>}
            />
          }
        />
        <Link className={'bg-dark text-white'} to="/profile/update">
          Edit Profile
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
