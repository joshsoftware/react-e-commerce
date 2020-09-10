import React from 'react';
import DropdownToggleComponent from './DropdownToggleComponent';
import DropdownMenuComponent from './DropdownMenuComponent';
import { UncontrolledDropdown } from 'reactstrap';

const UncontrolledDropdownComponent = () => {
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggleComponent
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        className="rounded"
        alt="img"
      />
      <DropdownMenuComponent />
    </UncontrolledDropdown>
  );
};

export default UncontrolledDropdownComponent;