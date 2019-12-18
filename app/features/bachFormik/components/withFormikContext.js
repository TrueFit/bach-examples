import React from 'react';
import {compose, withEffect} from '@truefit/bach';
import {withFormik, withFormikContext} from '@truefit/bach-formik';

const MagicSubmit = compose(
  withFormikContext(['values', 'submitForm']),
  withEffect(
    ({values, submitForm}) => {
      if (values.age >= 35) {
        submitForm();
      }
    },
    ['values, submitForm'],
  ),
)(() => null);

const WithFormik = ({values, handleChange, handleBlur}) => (
  <div>
    <div>
      Name:
      <input
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />
    </div>
    <div>
      Address:
      <input
        name="address"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.address}
      />
    </div>
    <div>
      Age:
      <input
        name="age"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.age}
      />
    </div>

    <MagicSubmit />
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
