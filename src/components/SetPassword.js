import React, { useEffect } from 'react';
import FormCard from './FormCard';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import ContainerWrapper from './ContainerWrapper';
import PropTypes from 'prop-types';
import AlertWrapper from './AlertWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { alertMessage } from '../actions/alertActions';
import alertReducer from '../reducers/alertReducer';

const SetPassword = ({ validateData, dispatch, formState }) => {
  const alertDispatch = useDispatch(alertReducer);
  const { alert, alertText, color } = useSelector((state) => state.alertReducer);
  const timeOutFunction = async () => {
    setTimeout(() => {
      alertDispatch(alertMessage({ alert: false, alertText: '' }));
    }, 2000);
  };

  useEffect(() => {
    timeOutFunction();
  }, [alert]);
  return (
    <ContainerWrapper
      styleClass={'pt-3 text-center h-100'}
      data={
        <>
          <AlertWrapper
            className="text-center fixed-top"
            color={color}
            isOpen={alert}
            data={alertText}
          />
          <RowWrapper
            data={
              <ColumnWrapper
                sm={{ size: 6, offset: 3 }}
                data={
                  <FormCard
                    type={'set-password'}
                    validateData={validateData}
                    dispatch={dispatch}
                    formState={formState}
                  />
                }
              />
            }
          />
        </>
      }
    />
  );
};

export default SetPassword;

SetPassword.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
