import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownItemComponent from './DropdownItemComponent';
import { DropdownMenu } from 'reactstrap';
import DropdownItemWrapper from './DropdownItemWrapper';
import { logoutRequest } from '../actions/formActions';
import { Link } from 'react-router-dom';

const DropdownMenuComponent = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.loginReducer);
  let ele1 = <DropdownItemComponent option="Profile" />;
  return (
    <DropdownMenu right>
      <Link to="/profile">{ele1}</Link>
      
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
