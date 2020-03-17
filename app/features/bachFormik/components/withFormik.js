import React from 'react';
import {compose} from '@truefit/bach';
import {withFormik} from '@truefit/bach-formik';

const WithFormik = ({
  formik: {values, handleChange, handleBlur, handleSubmit},
}) => (
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
