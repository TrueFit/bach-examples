import React from 'react';
import {compose} from '@truefit/bach';
import {withFormik} from '@truefit/bach-formik';

const WithFormik = ({values, handleChange, handleBlur, handleSubmit}) => (
  <div>
    <input
      name="name"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
    />
    <input
      name="address"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.address}
    />
    <input
      name="age"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.age}
    />

    <button type="submit" onClick={handleSubmit}>
      Submit
    </button>
  </div>
);

export default compose(
  withFormik({
    initialValues: {name: 'John Doe', address: '', age: ''},
    onSubmit: values => {
      console.log(values); // eslint-disable-line
    },
  }),
)(WithFormik);
