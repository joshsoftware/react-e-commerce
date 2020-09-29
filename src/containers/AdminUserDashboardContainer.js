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
import { Form, FormFeedback, FormGroup, Label, Col, Input } from 'reactstrap';
import * as yup from 'yup';
import { userInvite } from '../apis/userApi';

let emailObj = {
  field: 'exampleEmail',
  labelText: 'Email',
  type: 'email',
  name: 'email',
  placeholder: 'example@company.com'
};

const AdminUserDashboardContainer = () => {
  const [alertText, setAlertText] = useState('');
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.loginReducer);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(null);

  emailObj = {
    ...emailObj,
    value: email,
    onChange: (evt) => {
      setEmail(evt.target.value);
    },
    invalid: emailError !== null ? true : false,
    message: emailError
  };
  let schema = yup.object().shape({
    email: yup.string().email()
  });

  const validateData = () => {
    setEmailError(null);
    schema.isValid({ email }).then(function (valid) {
      if (!valid) {
        schema.validate({ email }, { abortEarly: false }).catch((err) => {
          err.inner.forEach((ele) => {
            setEmailError(ele.message);
          });
        });
      } else {
        userInvite(email, userDetails.token)
          .then(() => {
            setAlertText('User Invited');
            setVisible(true);
          })
          .catch((err) => {
            if (err == 'Error: Request failed with status code 409') {
              setAlertText('User already registered');
            } else {
              setAlertText('Invitation Failed');
            }
            setVisible(true);
          });
        setEmail('');
      }
    });
  };

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
    <RowWrapper
      data={
        <>
          <ColumnWrapper
            xs={8}
            sm={8}
            lg={9}
            md={8}
            data={
              <Form>
                <FormGroup row>
                  <Label for={emailObj.field} sm={2}>
                    {emailObj.labelText}
                  </Label>
                  <Col sm={10}>
                    <Input
                      type={emailObj.type}
                      name={emailObj.name}
                      placeholder={emailObj.placeholder}
                      value={emailObj.value}
                      onChange={emailObj.onChange}
                      invalid={emailObj.invalid}
                    />
                    <FormFeedback>{emailObj.message}</FormFeedback>
                  </Col>
                </FormGroup>
              </Form>
            }
          />
          <ColumnWrapper
            data={
              <ButtonWrapper
                buttonText={'Invite'}
                onClick={() => {
                  validateData();
                }}
              />
            }
          />
        </>
      }
    />
  );
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
              alertText === 'Delete Failed' ||
              alertText === 'Invitation Failed' ||
              alertText === 'User already registered'
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
