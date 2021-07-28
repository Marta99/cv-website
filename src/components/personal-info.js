import React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'
//import SEO from '../components/SEO'

import { Typography, Grid, Box } from '@material-ui/core'
import PersonalInfoLayout from './personal-info-layout'
import { title, description } from './personal-info.module.css'
import { container} from './layout.module.css'


const Personal = () => {
  return (
    <Grid
      container
      direction="column"
      spacing={4}
    > 
      <Grid item>
        <Typography className={title} variant="h4" >
          Personal Information
        </Typography>
        </Grid>
        <Grid item>
          <Grid container className={description}>
            <PersonalInfoLayout infoField="Address:">
              <p>C/. Pere Màrtir Colomés, nº21, 1r 1a</p>
              25280 Solsona (Lleida)
            </PersonalInfoLayout>
          </Grid>
          <Grid container className={description}>
            <PersonalInfoLayout infoField="Date of birth:">
              August 21, 1999 
            </PersonalInfoLayout>
          </Grid>
          <Grid container className={description}>
            <PersonalInfoLayout infoField="Phone:">
              606 38 12 23
            </PersonalInfoLayout>
          </Grid>
          <Grid container className={description}>
            <PersonalInfoLayout infoField="Email:">
              marta.albets@gmail.com
            </PersonalInfoLayout>
          </Grid>
          <Grid container className={description}>
            <PersonalInfoLayout infoField="Github:">
            <a href="https://github.com/Marta99" target="_blank" rel="noreferrer">Github profile</a>
            </PersonalInfoLayout>
          </Grid>
          <Grid container className={description}>
            <PersonalInfoLayout infoField="LinkedIn:">
            <a href="https://www.linkedin.com/in/marta-a-976520124/" target="_blank" rel="noreferrer">LinkedIn profile</a>
            </PersonalInfoLayout>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Personal