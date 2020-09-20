import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RegistrationDropdownContainer from '../containers/RegistrationDropdownContainer';
import FormLabel from './FormLabel';
import CountryDropdownContainer from '../containers/CountryDropdownContainer';
import StateDropdownContainer from '../containers/StateDropdownContainer';
import { initialState } from '../reducers/registrationReducer';
import { countryRequest } from '../actions/formActions';

let country = {
    field: 'exampleCountry',
    labelText: 'Country'
  },
  state = {
    field: 'exampleState',
    labelText: 'State'
  },
  city = {
    field: 'exampleCity',
    labelText: 'City'
  };

let data = [];
const FormDropdownField = (props) => {
  const [countries, setCountries] = useState([]);
  const [country_object, setCountryObject] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    countryRequest()
      .then((res) => {
        data = res.data;
        let ar = [];
        data.map((map_country) => {
          ar.push(map_country.name);
        });
        setCountries(ar);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);
  return (
    <>
      <FormLabel field={country.field} labelText={country.labelText} />
      <CountryDropdownContainer
        data={countries}
        type="country"
        state={props.country}
        countries={data}
        setCountryObject={setCountryObject}
        setStates={setStates}
        setCities={setCities}
        dispatch={props.dispatch}
      />
      <br />
      <FormLabel field={state.field} labelText={state.labelText} />
      <StateDropdownContainer
        data={states}
        type="state"
        state={props.state}
        states={country_object.states}
        setCities={setCities}
        dispatch={props.dispatch}
        disabled={props.country === initialState.country ? true : false}
      />
      <br />
      <FormLabel field={city.field} labelText={city.labelText} />
      <RegistrationDropdownContainer
        data={cities}
        type="city"
        state={props.city}
        dispatch={props.dispatch}
        disabled={props.state === initialState.state ? true : false}
      />
    </>
  );
};

export default FormDropdownField;

FormDropdownField.propTypes = {
  country: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};
