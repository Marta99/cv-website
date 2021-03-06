import React from 'react'

import { Typography, Grid } from '@material-ui/core'
import PersonalInfoLayout from './personal-info-layout'
import { title } from './personal-info.module.css'


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
          <Grid container>
            <PersonalInfoLayout infoField="Address:">
              <p>C/. Pere Màrtir Colomés, nº21, 1r 1a</p>
              25280 Solsona (Lleida)
            </PersonalInfoLayout>
          </Grid>
          <Grid container>
            <PersonalInfoLayout infoField="Date of birth:">
              August 21, 1999 
            </PersonalInfoLayout>
          </Grid>
          <Grid container>
            <PersonalInfoLayout infoField="Phone:">
              606 38 12 23
            </PersonalInfoLayout>
          </Grid>
          <Grid container>
            <PersonalInfoLayout infoField="Email:">
              marta.albets@gmail.com
            </PersonalInfoLayout>
          </Grid>
          <Grid container>
            <PersonalInfoLayout infoField="Github:">
            <a href="https://github.com/Marta99" target="_blank" rel="noreferrer">Github profile</a>
            </PersonalInfoLayout>
          </Grid>
          <Grid container>
            <PersonalInfoLayout infoField="LinkedIn:">
            <a href="https://www.linkedin.com/in/marta-a-976520124/" target="_blank" rel="noreferrer">LinkedIn profile</a>
            </PersonalInfoLayout>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default Personal