import React from 'react';
import Select from 'react-select';

const colorsOption = [
  { value: '#239B56', label: 'Green' },
  { value: '#DA170E ', label: 'Red' },
  { value: '#F6DC01 ', label: 'Yellow' },
  { value: '#FDFEFE ', label: 'White' },
  { value: '#8E44AD  ', label: 'Purple' },
  { value: '#17202A   ', label: 'Black' },
];
const ColorsMultiSelect = props => {
  const handleChange = value => {
    // this is going to call setFieldValue and manually update values.colors
    props.onChange('colors', value);
  };

  const handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.colors
    props.onBlur('colors', true);
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor='color'>Colors (select at least 2) </label>
      <Select
        id='color'
        options={colorsOption}
        isMulti
        onChange={handleChange}
        onBlur={handleBlur}
        value={props.value}
      />
      {props.error && props.touched && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>{props.error}</div>
      )}
    </div>
  );
};

export default ColorsMultiSelect;
