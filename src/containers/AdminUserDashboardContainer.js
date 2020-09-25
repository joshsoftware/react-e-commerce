import React, { useEffect } from 'react';
import ButtonWrapper from '../components/ButtonWrapper';
import RowWrapper from '../components/RowWrapper';
import ColumnWrapper from '../components/ColumnWrapper';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AdminUserList from '../components/AdminUserList';
import ContainerWrapper from '../components/ContainerWrapper';
import { getUserList } from '../actions/userListActions';
import './AdminDashboardContainer.css';
import alertReducer from '../reducers/alertReducer';
import { alertMessage } from '../actions/alertActions';
import AlertWrapper from '../components/AlertWrapper';
import userListReducer from '../reducers/userListReducer';

const AdminUserDashboardContainer = () => {
  const { alert, alertText } = useSelector((state) => state.alertReducer);
  const alertDispatch = useDispatch(alertReducer);
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.loginReducer);

  const timeOutFunction = async () => {
    setTimeout(() => {
      alertDispatch(alertMessage({ alert: false, alertText: '' }));
    }, 2000);
  };
  useEffect(() => {
    if (alert === true) {
      timeOutFunction();
    }
  }, [alert]);

  useEffect(() => {
    dispatch(getUserList(userDetails.token));
  }, []);

  const { userList } = useSelector((state) => state.userListReducer);
  if (!userDetails.token) {
    return <Redirect to="/login" />;
  }

  let column_content = [];
  let row_content = [];
  let users = [];
  users.push(<RowWrapper data={row_content} />);
  users.push(
    userList.map((user, index) => <AdminUserList key={index} user={user} dispatch={dispatch} />)
  );

  column_content.push(<h1>USERS DETAILS</h1>);
  let BackTo = <ButtonWrapper style={'dash_button'} buttonText={'Back-To'} />;
  row_content.push(
    <ColumnWrapper
      data={
        <Link className={'bg-dark text-white float-left'} to="/admindashboard">
          {' '}
          {BackTo}{' '}
        </Link>
      }
    />
  );
  row_content.push(<ColumnWrapper className={'col_dash'} data={column_content} />);
  row_content.push(<ColumnWrapper />);

  return (
    <>
      <ContainerWrapper
        className={'fixed-top'}
        data={
          <AlertWrapper
            className="text-center"
            color={alertText === 'Product deleted Successfully' ? 'danger' : 'info'}
            isOpen={alert}
            data={alertText}
          />
        }
      />
      <ContainerWrapper data={users} />
    </>
  );
};

export default AdminUserDashboardContainer;
