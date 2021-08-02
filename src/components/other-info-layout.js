import * as React from 'react'
import { Grid, Typography } from '@material-ui/core'

const style = {
    title: {
      paddingLeft: '15px',
      paddingBottom: '15px'
    }
}


const OtherInfoLayout = ({place, children}) => {
    return (
        <Grid>
            <Grid item xs={50}>
                <Typography style={style.title}>
                    {place}
                </Typography>
            </Grid>
            <Grid item xs={50}>
                <Typography>
                    {children}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default OtherInfoLayout