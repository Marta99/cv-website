import React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'
//import SEO from '../components/SEO'

import { Typography, Grid, Box } from '@material-ui/core'
import { title, description } from './personal-info.module.css'
import { container} from './layout.module.css'
import ProfessionalInfoLayout from './professional-info-layout'

const About = () => {
  return (
      <Grid
        container
        direction="column"
        spacing={4}
      >
        <Grid item>
          <Typography className={title} variant="h4" >            
            Professional experience
          </Typography>
        </Grid>
        <Grid item>
            <Grid container className={description}>
                <ProfessionalInfoLayout place="Enrajolats Josep Casafont, S.L." period="Summers 2016 and 2017">
                    <u>Administrative work:</u> Preparation of delivery notes, invoices
                    and budgets, banking organization, sales to public, customer service, 
                    revenue and expenditure accounting, tidying up and cleaning exhibitors and workspace.
                </ProfessionalInfoLayout>
            </Grid>
            <Grid container className={description}>
                <ProfessionalInfoLayout place="Estació de Servei Setelsis" period="Summer 2018">
                    <u>Miscellaneous work:</u> Refueling vehicles, cleaning outdoor facilities and services,
                     tidying up and refilling refrigerators and store shelves, serving costumers.
                </ProfessionalInfoLayout>
            </Grid>
        </Grid>
      </Grid>
  )
}

export default About