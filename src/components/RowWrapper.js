import React from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';

const RowWrapper = ({ data, noGutters, form, xs, sm, md, lg, xl }) => {
  return (
    <Row noGutters={noGutters} form={form} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
      {data}
    </Row>
  );
};

export default RowWrapper;

RowWrapper.propTypes = {
  data: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  noGutters: PropTypes.bool,
  form: PropTypes.bool,
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
