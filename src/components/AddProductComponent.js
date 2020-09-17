import React from 'react';
import FormCard from './FormCard';
import ColumnWrapper from './ColumnWrapper';
import RowWrapper from './RowWrapper';
import ContainerWrapper from './ContainerWrapper';
import PropTypes from 'prop-types';

const AddProductComponent = ({ validateData, dispatch, formState }) => {
  return (
    <ContainerWrapper
      styleClass={'pt-3 text-center h-100'}
      data={
        <RowWrapper
          data={
            <ColumnWrapper
              sm={{ size: 6, offset: 3 }}
              data={
                <FormCard
                  type={'add-product'}
                  validateData={validateData}
                  dispatch={dispatch}
                  formState={formState}
                />
              }
            />
          }
        />
      }
    />
  );
};

export default AddProductComponent;

AddProductComponent.propTypes = {
  validateData: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  formState: PropTypes.object.isRequired
};
