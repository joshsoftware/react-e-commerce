import React from 'react';
import { DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

const DropdownItemComponent = ({ option }) => {
  return (
    <>
      <DropdownItem>{option}</DropdownItem>
      <DropdownItem divider />
    </>
  );
};

export default DropdownItemComponent;

DropdownItemComponent.propTypes = {
  option: PropTypes.string.isRequired
};