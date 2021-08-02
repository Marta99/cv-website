import React from "react"
import { Link } from 'gatsby'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button, Grid, Typography, withStyles } from '@material-ui/core'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const MessageStyle = {
    text: {
        color: 'red',
    }
}

const ButtonStyle = {
    text: {
        fontWeight: 'bold',
        color: 'black'
    },
    position: {
        marginTop: '50px',
    }
}

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('#33c9dc'),
        backgroundColor: '#33c9dc',
        '&:hover': {
        backgroundColor: '#33c9dc',
        },
    },
}))(Button);

function ContactForm() {
    return (
  <Formik
    initialValues={{name: '',email:  '', message: '',}}
    validate={values => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const errors = {};
        if(!values.name) {
            errors.name = <Typography style={MessageStyle.text}>
              The name is required!
          </Typography>
        }
        if(!values.email) {
          errors.email = <Typography style={MessageStyle.text}>
          The email is required!
            </Typography>
        } else if(!emailRegex.test(values.email)) {
            errors.email = <Typography style={MessageStyle.text}>
            Invalid email address!
              </Typography>
        }
        if(!values.message) {
          errors.message = <Typography style={MessageStyle.text}>
          The message is required!
            </Typography>
        }
        return errors;
    }}
    onSubmit={
      (values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...values })
        })
        .then(() => {
          alert('Success');
          actions.resetForm()
        })
        .catch(() => {
          alert('Error');
        })
        .finally(() => actions.setSubmitting(false))
      }
    }
  >
  {() => (
    <Form name="contact" data-netlify={true}>
      <Grid
        container
        direction="column"
        alignContent="stretch"
      >
        <label htmlFor="name">Name: </label>
        <Field name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="email">Email: </label>
        <Field name="email" />
        <ErrorMessage color= "red" name="email" />

        <label htmlFor="message">Message: </label>
        <Field name="message" component="textarea"/>
        <ErrorMessage name="message" />

        <ColorButton style={ButtonStyle.position} type="submit" backgroundColor="primary">
            <Typography style={ButtonStyle.text}>
            SEND
            </Typography>
        </ColorButton>
        
      </Grid>
    </Form>
  )}
  </Formik>
)}

export default ContactForm