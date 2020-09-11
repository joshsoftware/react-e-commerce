import React from 'react';
import PropTypes from 'prop-types';
import FormGroupComponent from './FormGroupComponent';

const ItemComponent = ({ label, index, toggle }) => {
  return (
    <div
      className={'faq ' + (label.open ? 'open' : '')}
      key={index}
      onClick={() => toggle(index)}
      role="button"
      tabIndex={0}
      onKeyDown={() => toggle(index)}>
      <div className="label">{label.label}</div>

      {label.sublabel.map((label, i) => (
        <div className="sublabel" key={i}>
          <FormGroupComponent label={label} id={i} />
        </div>
      ))}
    </div>
  );
};

export default ItemComponent;

ItemComponent.propTypes = {
  label: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired
};
