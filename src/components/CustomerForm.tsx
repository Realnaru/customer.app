import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface CustomerFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  age?: number;
  address: string;
  active: boolean;
}

interface CustomerFormProps {
  initialValues: CustomerFormValues;
  onSubmit: (values: CustomerFormValues) => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    phoneNumber: Yup.string().matches(/^[0-9]+$/, 'Must be only digits').required('Phone Number is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    age: Yup.number().positive('Must be a positive number'),
    address: Yup.string().required('Address is required'),
    active: Yup.boolean(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" component="div" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" component="div" />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <Field name="phoneNumber" type="text" />
          <ErrorMessage name="phoneNumber" component="div" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <Field name="age" type="number" />
          <ErrorMessage name="age" component="div" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Field name="address" type="text" />
          <ErrorMessage name="address" component="div" />
        </div>
        <div>
          <label htmlFor="active">Active</label>
          <Field name="active" type="checkbox" />
          <ErrorMessage name="active" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default CustomerForm;
