import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { setField } from '../actions/formActions';
import DropdownItemWrapper from '../components/DropdownItemWrapper';
import DropdownToggleWrapper from '../components/DropdownToggleWrapper';
import DropdownMenuWrapper from '../components/DropdownMenuWrapper';
import DropDownWrapper from '../components/DropDownWrapper';

const CountryDropdownContainer = ({
  data,
  type,
  dispatch,
  state,
  countries,
  setCountryObject,
  setStates,
  setCities,
  disabled
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  let arr = [],
    i = 0;
  let arr1 = [];
  let itemFunc = (field_value) => {
    dispatch(setField(type, field_value));
    let ar = [];
    setStates([]);
    dispatch(setField('state', ''));
    setCities([]);
    dispatch(setField('city', ''));
    countries.map((map_country) => {
      if (map_country.name === field_value) {
        map_country.states.map((map_state) => {
          ar.push(map_state.name);
        });
        setCountryObject(map_country);
        return;
      }
    });
    setStates(ar);
  };
  arr = data.map((field_value) => {
    return (
      <DropdownItemWrapper key={i++} option={field_value} onClick={() => itemFunc(field_value)} />
    );
  });
  arr1.push(<DropdownToggleWrapper caret={true} data={state} />);
  arr1.push(<DropdownMenuWrapper data={arr} />);
  return <DropDownWrapper toggle={toggle} isOpen={dropdownOpen} data={arr1} disabled={disabled} />;
};

export default CountryDropdownContainer;

CountryDropdownContainer.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  countries: PropTypes.array.isRequired,
  setCountryObject: PropTypes.func.isRequired,
  setStates: PropTypes.func.isRequired,
  setCities: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};
