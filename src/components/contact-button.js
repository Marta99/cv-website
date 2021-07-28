import * as React from 'react'
import { Link } from 'gatsby'
import { Button, Grid, Typography, withStyles } from '@material-ui/core'
import { container } from './layout.module.css'

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('#33c9dc'),
        backgroundColor: '#33c9dc',
        '&:hover': {
        backgroundColor: '#33c9dc',
        },
    },
}))(Button);

const ButtonStyle = {
    text: {
        fontWeight: 'bold',
        color: 'black'
    },
    position: {
        width: '110%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '175%',
        marginTop: '50px',
    }
}

const ContactButton = () => {
    return (
        <Grid container className={container}>
            <Grid item>
                <ColorButton style={ButtonStyle.position} component={Link} to="/contact-form" variant="contained" backgroundColor="primary">
                <Typography style={ButtonStyle.text} component='h6' variant='h6'>
                CONTACT ME!
                </Typography></ColorButton>
            </Grid>
        </Grid>
    )
}

export default ContactButton