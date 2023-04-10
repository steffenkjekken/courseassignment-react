import React from 'react';
import styled from 'styled-components';
import { Container, Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const CONTAINER = styled.div`

max-width: 600px;
margin: auto;

.error {
    border: 2px solid #FF6565;
  }

.error-message {
  color: #FF6565;
  padding: .10em .2em;
  height: 1em;
  position: absolute;
  font-size: .8em;
}
`

const mailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, "*Names must have at least 3 characters")
  .required("*Name is required"),
  subject: Yup.string()
  .min(3, "*Subject must have at least 3 characters")
  .required("*Subject is required"),
  email: Yup.string()
  .matches(mailRegExp, "*Must be a valid email address")
  .required("*Phone number required"),
  body: Yup.string()
  .min(3, "*Body must have at least 3 characters")
  .required("*Body required")
});

const Contact = () => {
  return ( 
  <CONTAINER>
    <Container className='pt-4'>
      <Formik initialValues={{ name:"", subject:"", email:"", body:""}} 
      validationSchema={validationSchema}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        console.log(values);
        setSubmitting(true);
        setTimeout(() => {
          alert("Form submited successfully");
          resetForm();
          setSubmitting(false);
        }, 500);
      }}>
      {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
          <form className='mx-auto' onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={touched.name && errors.name ? "error" : null}
              />
              {touched.name && errors.name ? (
                <div className="error-message">{errors.name}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formPhone" className='mt-4'>
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
              className={touched.subject && errors.subject ? "error" : null}
              />
              {touched.subject && errors.subject ? (
                <div className="error-message">{errors.subject}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formEmail" className='mt-4'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "error" : null}
            />
            {touched.email && errors.email ? (
                <div className="error-message">{errors.email}</div>
              ): null}
          </Form.Group>
          <Form.Group controlId="formBlog" className='mt-4'>
            <Form.Label>Body</Form.Label>
            <Form.Control
              type="text"
              name="body"
              placeholder="Body"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.body}
              className={touched.body && errors.body ? "error" : null}
              as="textarea" rows={4} style={{
                resize: "none"
              }}
              />
              {touched.body && errors.body ? (
                <div className="error-message">{errors.body}</div>
              ): null}
          </Form.Group>
          <Button variant="primary" type="submit" className='mt-4'disabled={isSubmitting}>
          submit
          </Button>
          </form>
          )}
      </Formik>
    </Container>
  </CONTAINER>
  );
}

export default Contact;