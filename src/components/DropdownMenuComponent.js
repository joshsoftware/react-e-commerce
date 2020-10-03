import React from 'react';
import { useDispatch } from 'react-redux';
import DropdownItemComponent from './DropdownItemComponent';
import { DropdownMenu } from 'reactstrap';
import DropdownItemWrapper from './DropdownItemWrapper';
import { setUserDetails } from '../actions/formActions';
import { Link } from 'react-router-dom';
import logout from '../apis/logoutApi';

const DropdownMenuComponent = () => {
  const dispatch = useDispatch();
  // const { userDetails } = useSelector((state) => state.loginReducer);
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  let ele1 = <DropdownItemComponent option="Profile" />;
  return (
    <DropdownMenu right>
      <Link to="/profile">{ele1}</Link>

      <DropdownItemWrapper
        option="Logout"
        onClick={() => {
          logout(userDetails.token)
            .then(() => {
              sessionStorage.removeItem('userDetails');
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
