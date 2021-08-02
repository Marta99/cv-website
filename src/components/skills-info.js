import React from 'react'

import { Typography, Grid } from '@material-ui/core'
import { title1 } from './professional-info.module.css'
import OtherInfoLayout from './other-info-layout'


const Skills = () => {
  return (
        <Grid
            container
            direction="column"
            spacing={4}
        > 
        <Grid item>
          <Typography className={title1} variant="h4" >
            Language skills
          </Typography>
        </Grid>
        <Grid item>
            <Grid container>
                <OtherInfoLayout place="Catalan: high level (C2 certificate)"/>
            </Grid>
            <Grid container>
                <OtherInfoLayout place="Spanish: high level"/>
            </Grid>
            <Grid container>
                <OtherInfoLayout place="English: mid level (B2 certificate)"/>
            </Grid>
        </Grid>
        <Grid item>
          <Typography className={title1} variant="h4" >
            Technology skills
          </Typography>
        </Grid>
        <Grid item>
            <Grid container>
                <OtherInfoLayout place="ACTIC: mid level certificate"/>
            </Grid>
            <Grid container>
                <OtherInfoLayout place="Windows: high level"/>
            </Grid>
            <Grid container>
                <OtherInfoLayout place="Linux: high level"/>
            </Grid>
            <Grid container>
                <OtherInfoLayout place="Internet(browsing, buying ans selling, and resources): advanced level"/>
            </Grid>
            <Grid container>
                <OtherInfoLayout place="Programming languages and technologies used: Java, Python, C, bash, HTML, SQL, 
                IntelliJ, Pycharm, Visual Studio Code, Netbeans, Latex, vim, Visual Paradigm"/>
            </Grid>
        </Grid>
      </Grid>
  )
}

export default Skills