import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormGroupComponent from './FormGroupComponent';

const ItemComponent = ({ label, index, toggle, setLabel, setProducts, products }) => {
  const [filterby, setFilterby] = useState('');

  const setSublabel = (props) => {
    setFilterby(props);
  };

  return (
    <div
      className={'faq ' + (label.open ? 'open' : '')}
      key={index}
      onClick={() => toggle(index)}
      role="button"
      tabIndex={0}
      onKeyDown={() => toggle(index)}>
      <div
        className="label"
        onClick={() => {
          setSublabel(label.id);
        }}>
        {label.label}
      </div>

      {label.sublabel.map((sublabel, i) => (
        <div className="sublabel" key={i}>
          <FormGroupComponent
            label={sublabel}
            mainLabel={filterby}
            setLabel={setLabel}
            setProducts={setProducts}
            products={products}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemComponent;

ItemComponent.propTypes = {
  label: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
  setLabel: PropTypes.func,
  setProducts: PropTypes.func,
  products: PropTypes.object
};
