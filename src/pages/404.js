import * as React from "react"
import { Link } from "gatsby"
import { Button, Grid, Typography, withStyles } from '@material-ui/core'

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textAlign: "center",
}
const headingStyles = {
  marginTop: 100,
  marginBottom: 50,
  maxWidth: 320,
  marginLeft: 700,
  fontSize: "2.5rem"
}

const paragraphStyles = {
  marginBottom: 48,
  fontSize: "1.25rem"
}


// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found page</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.<br/>
        <br/><Link to="/">Go home</Link>
      </p>
    </main>
  )
}

export default NotFoundPage

/*
<br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        */
