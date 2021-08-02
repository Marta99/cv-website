import * as React from "react"
import Layout from '../components/layout'
import Presentation from '../components/presentation'
import ContactButton from '../components/contact-button'
import Personal from '../components/personal-info'
import Professional from '../components/professional-info'
import Skills from '../components/skills-info'

const IndexPage = () => {
  return (
    <Layout sectionTitle="">
      <Presentation />
      <Personal />
      <Professional />
      <Skills />
      <ContactButton />
    </Layout>
  )
}

export default IndexPage
