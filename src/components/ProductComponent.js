import React, { useEffect } from 'react';
import NavigationBarComponent from './NavigationBarComponent';
import SearchBarContainer from '../containers/SearchBarContainer';
import SideBarComponent from './SideBarComponent';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import ContainerWrapper from './ContainerWrapper';
import AlertWrapper from './AlertWrapper';
import { useDispatch, useSelector } from 'react-redux';
import alertReducer from '../reducers/alertReducer';
import { alertMessage } from '../actions/alertActions';
const ProductComponent = () => {
  const { alert, alertText, color } = useSelector((state) => state.alertReducer);
  const alertDispatch = useDispatch(alertReducer);
  const timeOutFunction = async () => {
    setTimeout(() => {
      alertDispatch(alertMessage({ alert: false, alertText: '' }));
    }, 2000);
  };

  useEffect(() => {
    timeOutFunction();
  }, [alert]);
  return (
    <>
      <NavigationBarComponent className="navClass fixed-top" expand="md" />
      <br />
      <br />
      <br />
      <br />
      <SideBarComponent />
      <ContainerWrapper
        data={
          <RowWrapper
            data={
              <>
                <ColumnWrapper className={'col-4'} />
                <ColumnWrapper className={'col-6'} data={<SearchBarContainer />} />
                <ColumnWrapper />
              </>
            }
          />
        }
      />
      <ContainerWrapper
        data={
          <AlertWrapper
            className="text-center fixed-top"
            color={color !== '' ? color : 'info'}
            isOpen={alert}
            data={alertText}
          />
        }
      />
    </>
  );
};

export default ProductComponent;
