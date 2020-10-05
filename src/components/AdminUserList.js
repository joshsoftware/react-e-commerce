import React from 'react';
import './CartItem.css';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import ButtonWrapper from './ButtonWrapper';
import CardTextWrapper from './CardTextWrapper';
import { deleteUser } from '../actions/userListActions';
import { enableUser } from '../actions/userListActions';
import { disableUser } from '../actions/userListActions';
import { deleteUserApi } from '../apis/userApi';
import { disableUserApi } from '../apis/userApi';
import { enableUserApi } from '../apis/userApi';
import { useSelector } from 'react-redux';
import ModalWrapper from './ModalWrapper';

const AdminUserList = ({ user, dispatch, setAlertText, setVisible }) => {
  let { first_name, last_name, id, email, country, state, city, isDisabled } = user;
  const { userDetails } = useSelector((state) => state.loginReducer);
  let column_content = [];
  let i = 0;
  let user_details = [];
  let user_location_details = [];
  user_details.push(
    <CardTextWrapper
      className={'font-weight-bold'}
      key={i++}
      text={'Name: ' + first_name + ' ' + last_name}
    />
  );
  const onClickWrapper = () => {
    deleteUserApi({ token: userDetails.token, user_id: id })
      .then(() => {
        dispatch(deleteUser(id));
        setAlertText('User Deleted Successfully');
        setVisible(true);
      })
      .catch((err) => {
        if (err == 'Error: Request failed with status code 404') {
          setAlertText('Delete Failed: Bad Request');
        } else if (err == 'Error: Request failed with status code 401') {
          setAlertText('Delete Failed: Unauthorized');
        } else {
          setAlertText('Delete Failed: Internal Server Error');
        }
        setVisible(true);
      });
  };
  user_details.push(
    <CardTextWrapper className={'font-weight-bold'} key={i++} text={'Email Id: ' + email} />
  );
  user_location_details.push(
    <CardTextWrapper className={'font-weight-bold'} key={i++} text={'City: ' + city} />
  );
  user_location_details.push(
    <CardTextWrapper className={'font-weight-bold'} key={i++} text={'State: ' + state} />
  );
  user_location_details.push(
    <CardTextWrapper className={'font-weight-bold'} key={i++} text={'Country: ' + country} />
  );
  column_content.push(
    <ColumnWrapper
      key={i++}
      md={5}
      lg={5}
      xl={5}
      sm={5}
      xs={5}
      className={'col_two'}
      data={user_details}
    />
  );
  column_content.push(
    <ColumnWrapper key={i++} className={'col_two'} data={user_location_details} />
  );

  column_content.push(
    <ColumnWrapper
      key={i++}
      className={'col_five'}
      data={
        <ModalWrapper
          buttonText={'Delete'}
          color={'danger'}
          onClickWrapper={onClickWrapper}
          modalTitle={'Do you really want to remove this user?'}
        />
      }
    />
  );
  if (isDisabled) {
    column_content.push(
      <ColumnWrapper
        key={i++}
        className={'col_five'}
        data={
          <ButtonWrapper
            buttonText={'Enable User'}
            outline
            onClick={() => {
              enableUserApi({ token: userDetails.token, user_id: id })
                .then(() => {
                  dispatch(enableUser(id));
                  setAlertText('Enabled Successfully');
                  setVisible(true);
                })
                .catch((err) => {
                  if (err == 'Error: Request failed with status code 404') {
                    setAlertText('Enable Failed: Bad Request');
                  } else if (err == 'Error: Request failed with status code 401') {
                    setAlertText('Enable Failed: Unauthorized');
                  } else {
                    setAlertText('Enable Failed: Internal Server Error');
                  }
                  setVisible(true);
                });
            }}
          />
        }
      />
    );
  } else {
    column_content.push(
      <ColumnWrapper
        key={i++}
        className={'col_five'}
        data={
          <ButtonWrapper
            buttonText={'Disable User'}
            outline
            onClick={() => {
              disableUserApi({ token: userDetails.token, user_id: id })
                .then(() => {
                  dispatch(disableUser(id));
                  setAlertText('Disabled Successfully');
                  setVisible(true);
                })
                .catch((err) => {
                  if (err == 'Error: Request failed with status code 404') {
                    setAlertText('Disable Failed: Bad Request');
                  } else if (err == 'Error: Request failed with status code 401') {
                    setAlertText('Disable Failed: Unauthorized');
                  } else {
                    setAlertText('Disable Failed: Internal Server Error');
                  }
                  setVisible(true);
                });
            }}
          />
        }
      />
    );
  }

  return (
    <>
      <RowWrapper className={'row_style'} data={column_content} />
    </>
  );
};

export default AdminUserList;

AdminUserList.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    id: PropTypes.number,
    isDisabled: PropTypes.bool
  }),
  dispatch: PropTypes.func.isRequired,
  setAlertText: PropTypes.func.isRequired,
  setVisible: PropTypes.func.isRequired
};
