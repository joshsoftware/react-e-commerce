import React from 'react';
import { DropdownMenu } from 'reactstrap';
import PropTypes from 'prop-types';

const DropdownMenuWrapper = ({ data, tag, right, flip, className, positionFixed }) => {
  return (
    <DropdownMenu
      tag={tag}
      right={right}
      flip={flip}
      className={className}
      positionFixed={positionFixed}>
      {data}
    </DropdownMenu>
  );
};

export default DropdownMenuWrapper;

DropdownMenuWrapper.propTypes = {
  data: PropTypes.array.isRequired,
  tag: PropTypes.string,
  right: PropTypes.bool,
  flip: PropTypes.bool,
  className: PropTypes.string,
  positionFixed: PropTypes.bool
};
