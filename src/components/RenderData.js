import React from 'react';
import RowWrapper from './RowWrapper';
import ColumnWrapper from './ColumnWrapper';
import PropTypes from 'prop-types';

const RenderData = ({ label, userdata }) => {
  return (
    <>
      <RowWrapper
        className="mb-4 border text-dark"
        data={
          <>
            <ColumnWrapper data={label} />
            <ColumnWrapper className="text-align-center" data=":" />
            <ColumnWrapper data={userdata} />
          </>
        }
      />
    </>
  );
};

export default RenderData;

RenderData.propTypes = {
  label: PropTypes.string,
  userdata: PropTypes.string
};
