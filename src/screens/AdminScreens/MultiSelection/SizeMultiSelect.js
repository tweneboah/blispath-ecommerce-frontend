import React from 'react';
import Select from 'react-select';

const sizesOption = [
  { value: 'XS', label: 'XS' },
  { value: 'S ', label: 'S' },
  { value: 'L ', label: 'L' },
  { value: 'XL ', label: 'XL' },
  { value: 'XXL  ', label: 'Purple' },
];
const SizeMultiSelect = props => {
  const handleChange = value => {
    // this is going to call setFieldValue and manually update values.colors
    props.onChange('sizes', value);
  };

  const handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.colors
    props.onBlur('sizes', true);
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor='color'>Size (select at least 2) </label>
      <Select
        id='color'
        options={sizesOption}
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

export default SizeMultiSelect;
