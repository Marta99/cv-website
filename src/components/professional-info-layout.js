import * as React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { description } from './professional-info.module.css'

const style = {
    title: {
      fontWeight: 'bold',
      paddingLeft: '15px'
    }
}

const ProfessionalInfoLayout = ({place, period, children}) => {
    return (
        <Grid>
            <Grid item xs={50}>
                <Typography style={style.title}>
                    {place}   -   {period}
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

export default ProfessionalInfoLayout