import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownItemComponent from './DropdownItemComponent';
import { DropdownMenu } from 'reactstrap';
import DropdownItemWrapper from './DropdownItemWrapper';
import { logoutRequest } from '../actions/formActions';

const DropdownMenuComponent = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.loginReducer);

  return (
    <DropdownMenu right>
      <DropdownItemComponent option="Profile" />
      <DropdownItemWrapper
        option="Logout"
        onClick={() => {
          logoutRequest(userDetails.token, dispatch);
        }}
      />
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;
