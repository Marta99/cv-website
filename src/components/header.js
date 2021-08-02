import * as React from 'react'
import { Link } from 'gatsby'
import { Button, ButtonGroup, Grid } from '@material-ui/core'
import { navLinks} from './layout.module.css'

const Header = () => {
  //const homepageClass = isHomepage ? 'homepage-header' : ''
  return (
    <Grid container justify="space-between">
      <ButtonGroup className={navLinks} variant="text" color="primary" aria-label="nav button group">
        <Button component={ Link } to="/">Home</Button>
        <Button component={ Link } to="/contact-form">Contact</Button>
      </ButtonGroup>
    </Grid>
  )
}

export default Header