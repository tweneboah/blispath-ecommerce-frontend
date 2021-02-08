import React from 'react';
import Select from 'react-select';

const shoesSizesOption = [
  { value: '38', label: '38' },
  { value: '39 ', label: '39' },
  { value: '40 ', label: '40' },
  { value: '41 ', label: '41' },
  { value: '42  ', label: '42' },
  { value: '43  ', label: '43' },
  { value: '44  ', label: '44' },
  { value: '45  ', label: '45' },
  { value: '46  ', label: '46' },
];
const ShoeSizeMultiSelect = props => {
  const handleChange = value => {
    // this is going to call setFieldValue and manually update values.colors
    props.onChange('shoesSizes', value);
  };

  const handleBlur = () => {
    // this is going to call setFieldTouched and manually update touched.colors
    props.onBlur('shoesSizes', true);
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <label htmlFor='color'>Shoe Size (select at least 1) </label>
      <Select
        id='color'
        options={shoesSizesOption}
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

export default ShoeSizeMultiSelect;
