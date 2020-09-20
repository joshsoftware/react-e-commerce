import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormGroupComponent from './FormGroupComponent';
import FormInput from './FormInput';
import ButtonWrapper from './ButtonWrapper';
import { setMinMax, applyPriceFilter, applyFilters } from '../actions/productListActions';
import { useDispatch } from 'react-redux';
import { Form } from 'reactstrap';

const ItemComponent = ({ label, index, toggle, setLabel, setProducts, products, labels }) => {
  const [filterby, setFilterby] = useState('');
  const dispatch = useDispatch();

  const toggleSecond = () => {
    setLabel(
      labels.map((label, i) => {
        if (i === index) {
          label.open = true;
        } else {
          label.open = false;
        }

        return label;
      })
    )
  }
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const setSublabel = (props) => {
    setFilterby(props);
  };

  const setPrice = () => {
    if(min === ""){
      setMin("0");
    }
    if(max === ""){
      setMax("500,000");
    }
    if(min<0){
      
    }
    dispatch(setMinMax(min, max));
  }

  if(label.label !== "Price"){
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
  } else{
    return (
      <div
        className={'faq ' + (label.open ? 'open' : '')}
        key={index}
        onClick={() => toggleSecond(index)}
        role="button"
        tabIndex={0}
        >
        <div className="label">
          {label.label}
        </div>
        <div className="sublabel">
          <Form>
          <FormInput type="text" placeholder="Min 0" value={min} onChange={(e) => setMin(e.target.value)}/>
          To
          <FormInput type="text" placeholder="Max 500,000" value={max} onChange={(e) => setMax(e.target.value)}/>
          <ButtonWrapper buttonText="Find" color="info" onClick={() => {setPrice();
          dispatch(applyFilters());
          dispatch(applyPriceFilter());}}/>
          </Form>
        </div>
      </div>
    );
  }
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
