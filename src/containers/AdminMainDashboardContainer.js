import React, { useEffect, useState } from 'react';
import ButtonWrapper from '../components/ButtonWrapper';
import RowWrapper from '../components/RowWrapper';
import ColumnWrapper from '../components/ColumnWrapper';
import { Link, Redirect } from 'react-router-dom';
import ContainerWrapper from '../components/ContainerWrapper';
import './AdminMainDashboardContainer.css';
import alertReducer from '../reducers/alertReducer';
import { alertLogin } from '../actions/alertActions';
import { setUserDetails } from '../actions/formActions';
import AlertWrapper from '../components/AlertWrapper';
import logout from '../apis/logoutApi';
import { useSelector, useDispatch } from 'react-redux';
import loginReducer from '../reducers/LoginReducer';

const AdminMainDashboardContainer = () => {
  const { loginAlert, loginAlertText } = useSelector((state) => state.alertReducer);
  const alertDispatch = useDispatch(alertReducer);
  const loginDispatch = useDispatch(loginReducer);
  // const { userDetails } = useSelector((state) => state.loginReducer);
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  const [isLogout, setLogout] = useState(false);
  const timeOutFunction = async () => {
    setTimeout(() => {
      alertDispatch(alertLogin({ alert: false, alertText: '' }));
    }, 2000);
  };

  useEffect(() => {
    if (loginAlert === true) {
      timeOutFunction();
    }
  }, [loginAlert]);

  if (userDetails) {
    if (!userDetails.token) {
      return <Redirect to="/login" />;
    }
    if (!userDetails.isAdmin) {
      return <Redirect to="/products" />;
    }
  } else {
    return <Redirect to="/login" />;
  }
  if (isLogout) {
    return <Redirect to="/login" />;
  }
  let logoutVar = (
    <ButtonWrapper
      style={'dash_button'}
      onClick={() => {
        logout(userDetails.token)
          .then(() => {
            sessionStorage.removeItem('userDetails');
            loginDispatch(setUserDetails({}));
            setLogout(true);
          })
          .catch((error) => {
            console.log('error', error);
          });
      }}
      buttonText={'Logout'}
    />
  );

  const productButton = (
    <ButtonWrapper style={'dashboard_button'} buttonText={'Product Dashboard'} />
  );
  const userButton = <ButtonWrapper style={'dashboard_button'} buttonText={'User Dashboard'} />;
  let column_content = [];
  let row_content = [];
  let container_content = [];
  column_content.push(<Link to="/admin/products"> {productButton} </Link>);
  column_content.push(<Link to="/admin/users"> {userButton} </Link>);
  row_content.push(<ColumnWrapper />);
  row_content.push(<ColumnWrapper data={column_content} />);
  row_content.push(<ColumnWrapper />);
  container_content = [];
  container_content.push(
    <RowWrapper
      data={
        <ColumnWrapper
          data={
            <Link className={'bg-dark text-white float-left'} to="/login">
              {' '}
              {logoutVar}{' '}
            </Link>
          }
        />
      }
    />
  );
  container_content.push(<RowWrapper className={'dashboard_row'} data={row_content} />);
  return (
    <>
      <ContainerWrapper
        className={'fixed-top'}
        data={
          <AlertWrapper
            className="text-center"
            color={'info'}
            isOpen={loginAlert}
            data={loginAlertText}
          />
        }
      />
      <ContainerWrapper data={container_content} />
    </>
  );
};

export default AdminMainDashboardContainer;
