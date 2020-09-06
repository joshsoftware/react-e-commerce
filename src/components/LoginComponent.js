import React from 'react';
import FormCard from './FormCard';
import ContainerWrapper from './ContainerWrapper';
import RowWrapper from './RowWrapper';
import ColumnWrapper from './ColumnWrapper';

const LoginComponent = () => {
  return (
    <ContainerWrapper
      styleClass={'container pt-3 text-center h-100 '}
      data={
        <RowWrapper
          data={<ColumnWrapper sm={{ size: 6, offset: 3 }} data={<FormCard type={'login'} />} />}
        />
      }
      fluid={true}
    />
  );
};

export default LoginComponent;
