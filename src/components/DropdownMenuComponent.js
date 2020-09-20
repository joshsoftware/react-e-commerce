import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropdownItemComponent from './DropdownItemComponent';
import { DropdownMenu } from 'reactstrap';
import DropdownItemWrapper from './DropdownItemWrapper';
import { setUserDetails } from '../actions/formActions';
import { Link } from 'react-router-dom';
import logout from '../apis/logoutApi';

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
          let token = userDetails.token;
          logout(token)
            .then(() => {
              dispatch(setUserDetails({}));
            })
            .catch((error) => {
              console.log('error', error);
            });
        }}
      />
    </DropdownMenu>
  );
};

export default DropdownMenuComponent;
