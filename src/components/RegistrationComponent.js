import React from 'react';
import FormCard from './FormCard';
import ContainerWrapper from './ContainerWrapper';
import RowWrapper from './RowWrapper';
import ColumnWrapper from './ColumnWrapper';

const RegistrationComponent = () => {
  return (
    <ContainerWrapper
      styleClass={'pt-3 text-center h-100'}
      data={
        <RowWrapper
          data={
            <ColumnWrapper sm={{ size: 6, offset: 3 }} data={<FormCard type={'registration'} />} />
          }
        />
      }
    />
  );
};

export default RegistrationComponent;
