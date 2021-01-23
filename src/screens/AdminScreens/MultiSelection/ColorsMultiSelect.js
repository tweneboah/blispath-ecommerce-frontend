import React from 'react';
import Select from 'react-select';

const colorsOption = [
  { value: 'green', label: 'Green' },
  { value: 'red ', label: 'Red' },
  { value: 'yellow ', label: 'Yellow' },
  { value: 'White ', label: 'White' },
  { value: 'purple  ', label: 'Purple' },
  { value: 'black   ', label: 'Black' },
  { value: 'pink   ', label: 'Pink' },
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
      <label htmlFor='color'>Colors (select at least 3) </label>
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
