import React, { useEffect, useState } from 'react';
import ButtonWrapper from '../components/ButtonWrapper';
import RowWrapper from '../components/RowWrapper';
import ColumnWrapper from '../components/ColumnWrapper';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AdminUserList from '../components/AdminUserList';
import ContainerWrapper from '../components/ContainerWrapper';
import { getUserList } from '../actions/userListActions';
import './AdminDashboardContainer.css';
import AlertWrapper from '../components/AlertWrapper';

const AdminUserDashboardContainer = () => {
  const [alertText, setAlertText] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.loginReducer);

  const timeOutFunction = async () => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };
  useEffect(() => {
    if (visible === true) {
      timeOutFunction();
    }
  }, [visible]);

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
    userList.map((user, index) => {
      if (!user.isAdmin) {
        return (
          <AdminUserList
            key={index}
            user={user}
            dispatch={dispatch}
            setVisible={setVisible}
            setAlertText={setAlertText}
          />
        );
      }
    })
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
        data={
          <AlertWrapper
            className="text-center fixed-top"
            color={
              alertText === 'User deleted Successfully' ||
              alertText === 'Disable failed' ||
              alertText === 'Enable failed' ||
              alertText === 'Delete Failed'
                ? 'danger'
                : 'info'
            }
            isOpen={visible}
            data={alertText}
          />
        }
      />
      <ContainerWrapper data={users} />
    </>
  );
};

export default AdminUserDashboardContainer;
