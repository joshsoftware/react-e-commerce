import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormGroupComponent from './FormGroupComponent';
import FormInput from './FormInput';
import ButtonWrapper from './ButtonWrapper';
import { setMinMax, applyPriceFilter, applyFilters } from '../actions/productListActions';
import { useDispatch } from 'react-redux';
import { Form, FormGroup } from 'reactstrap';
import FormFeedbackWrapper from './FormFeedbackWrapper';

const ItemComponent = ({ label, index, toggle, setLabel, setProducts, products, labels }) => {
  const [filterby, setFilterby] = useState('category');
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

  const toggleCategories = () => {
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
  const [minError, setMinError] = useState(null);
  const [maxError, setMaxError] = useState(null);

  const setSublabel = (props) => {
    setFilterby(props);
  };

  const setPrice = () => {
    setMinError(null);
    setMaxError(null);
    if(parseFloat(min)>parseFloat(max)) {
      setMaxError("max should be greater than min");
    }
    if(parseFloat(min) < 0) {
      setMinError("Must be positive");
    }
    if(parseFloat(max) < 0) {
      setMaxError("Must be positive");
    }
    var reg = /^-?\d+$/;
    if(!reg.test(min))
    {
      setMinError("min must be number");
    }
    if(!reg.test(max))
    {
      setMaxError("max must be number");
    }
    if(min === ""){
      setMin("0");
      setMinError(null);
    }
    if(max === ""){
      setMax("500,000");
      setMaxError(null);
    }

    dispatch(setMinMax(min, max));
    if(minError === null && maxError === null) {
      dispatch(applyFilters());
      dispatch(applyPriceFilter());
    }
  }

  if(label.label !== "Price"){
    if(label.label === "Accessories"){
      return(
        <div
        className={'faq ' + (label.open ? 'open' : '')}
        key={index}
        onClick={() => toggleCategories(index)}
        role="button"
        tabIndex={0}
        onKeyDown={() => toggle(index)}>
          <div
            className="label"
            onClick={() => {
              console.log("id : ",label.id)
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
      )
    } else {
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
    }
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
            <FormGroup>
              <FormInput type="text" placeholder="Min 0" value={min} onChange={(e) => setMin(e.target.value)} invalid={minError !== null ? true : false}/>
              <FormFeedbackWrapper message={minError}/>
            </FormGroup>  
            To
            <FormGroup>
              <FormInput type="text" placeholder="Max 500,000" value={max} onChange={(e) => setMax(e.target.value)} invalid={maxError !== null ? true : false}/>
              <FormFeedbackWrapper message={maxError}/>
            </FormGroup>
            <ButtonWrapper buttonText="Find" color="info" onClick={() => {
              setPrice();
            }}
            />
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
