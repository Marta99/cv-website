import * as React from 'react'
import { Link } from 'gatsby'
import { Button, Grid, Typography } from '@material-ui/core'
import { container } from './layout.module.css'
import { 
    name,
    description,
} from './presentation.module.css'

const Presentation = () => {
    return (
        <Grid container className={container}>
            <Grid item>
                <Typography className={name} variant='h2'>
                    Marta Albets Mitjaneta
                </Typography>
            </Grid>
            <Grid item>
                <Typography className={description} variant='h6'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie ornare ante, ac fringilla ligula rutrum nec. 
                Cras a facilisis ex. In dapibus ut felis ut facilisis. Cras non tellus id magna dapibus efficitur. 
                Nullam sit amet lectus at lacus laoreet rutrum. Nulla facilisi. Nullam lacinia metus ligula, nec ullamcorper magna pellentesque vel. 
                Mauris eu tellus dignissim, porttitor neque vel, tempor dolor. Suspendisse ultricies pharetra mauris a auctor. 
                Etiam hendrerit dui id ante interdum, sit amet volutpat velit malesuada. Curabitur sodales dictum cursus. Donec et elit vitae arcu egestas efficitur. 
                Ut mollis euismod massa eget sagittis. Aliquam tincidunt maximus augue. Nulla pulvinar tristique tempus. Phasellus facilisis efficitur elit non dictum.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Presentation