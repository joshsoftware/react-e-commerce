import React from 'react';
import DropdownToggleComponent from './DropdownToggleComponent';
import DropdownMenuComponent from './DropdownMenuComponent';
import { UncontrolledDropdown } from 'reactstrap';
import { useSelector } from 'react-redux';

const UncontrolledDropdownComponent = () => {
  const { profile } = useSelector((state) => state.userprofileReducer);
  const profileImage =
    profile.profile_image !== ''
      ? `${process.env.REACT_APP_SERVER_URL}${profile.profile_image}`
      : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggleComponent src={profileImage} className="rounded" alt="img" />
      <DropdownMenuComponent />
    </UncontrolledDropdown>
  );
};

export default UncontrolledDropdownComponent;
