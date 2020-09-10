import React from 'react';
import DropdownItemComponent from './DropdownItemComponent';
import { DropdownMenu } from 'reactstrap';

const DropdownMenuComponent = () => {
  return (
    <DropdownMenu right>
      <DropdownItemComponent option="Profile" />
      <DropdownItemComponent option="Logout" />
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;