import React from 'react';
import Select from 'react-select';

const colorsOption = [
  { value: 'green', label: 'Green' },
  { value: '#FF0000', label: 'Red' },
  { value: 'yellow ', label: 'Yellow' },
  { value: 'White ', label: 'White' },
  { value: 'purple  ', label: 'Purple' },
  { value: 'black   ', label: 'Black' },
  { value: 'pink   ', label: 'Pink' },
  { value: '#C0C0C0   ', label: 'Silver' },
  { value: '#808080	   ', label: 'Gray' },
  { value: '#800000	   ', label: 'Maroon' },
  { value: '#808080	   ', label: 'Gray' },
  { value: '#808000	   ', label: 'Olive' },
  { value: '#00FF00	   ', label: 'Lime' },
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
      <label htmlFor='color'>Product Colors (select at least 1) </label>
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
