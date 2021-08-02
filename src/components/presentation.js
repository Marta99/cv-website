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
                <Typography className={description} variant='h5'>
               I am a computer engineer and I have a passion for UX design and research.
               I like team working because is the best way to work and learning new things.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Presentation