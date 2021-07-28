import * as React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { container } from './layout.module.css'
import { title, description } from './personal-info.module.css'

const style = {
    title: {
      fontWeight: 'bold',
    }
  }

const PersonalInfoLayout = ({infoField, children}) => {
    return (
        <Grid>
            <Grid item xs={50}>
                <Typography style={style.title}>
                    {infoField}
                </Typography>
            </Grid>
            <Grid item xs={50}>
                <Typography className={description}>
                    {children}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default PersonalInfoLayout