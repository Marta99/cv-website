import React from 'react'
import { Link } from 'gatsby'
import Layout from './components/layout'
//import SEO from '../components/SEO'

import { Typography, Grid, Box } from '@material-ui/core'
import { title1, description } from './professional-info.module.css'
import ProfessionalInfoLayout from './professional-info-layout'

const style = {
  title: {
    color: 'black',
    fontWeight: 'bold',
  }
}


const Education = () => {
  return (
      <Grid
        container
        direction="column"
        spacing={4}
      > 
        <Grid item>
          <Typography style={style.title} variant="h4" >
            Education
          </Typography>
        </Grid>
        <Grid item>
            <Grid container>
                <ProfessionalInfoLayout place="Institut Francesc Ribalta (Solsona)" date="September 2015 - June 2017">
                    Scientific and technological baccalaureate
                </ProfessionalInfoLayout>
            </Grid>
            <Grid container>
                <ProfessionalInfoLayout place="University of Lleida" date=" September 2017 - July 2021">
                    Degree in Computer Engineering
                </ProfessionalInfoLayout>
            </Grid>
        </Grid>
      </Grid>
  )
}

export default Education