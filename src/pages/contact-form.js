import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
//import SEO from '../components/SEO'
import { Formik } from 'formik';
import ContactForm from '../components/contact-form';


const Contact = () => {
  return (
    <Layout sectionTitle="Contact">
      <ContactForm/>
    </Layout>
  )
}

export default Contact

//description="Send an email for any questions or offers."