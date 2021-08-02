import React from 'react'

import { Typography, Grid } from '@material-ui/core'
import { title1 } from './professional-info.module.css'
import ProfessionalInfoLayout from './professional-info-layout'
import OtherInfoLayout from './other-info-layout'
import { title2 } from './other-info.module.css'

const Professional = () => {
  return (
    <Grid
        container
        direction="column"
        spacing={4}
    >
        <Grid item>
            <Typography className={title1} variant="h4" >            
                Professional experience
            </Typography>
        </Grid>
        <Grid item>
            <Grid container>
                <ProfessionalInfoLayout place="Enrajolats Josep Casafont, S.L." period="Summers 2016 and 2017">
                    <u>Administrative work:</u> Preparation of delivery notes, invoices
                    and budgets, banking organization, sales to public, customer service, 
                    revenue and expenditure accounting, tidying up and cleaning exhibitors and workspace.
                </ProfessionalInfoLayout>
            </Grid>
            <Grid container>
                <ProfessionalInfoLayout place="Estació de Servei Setelsis" period="Summer 2018">
                    <u>Miscellaneous work:</u> Refueling vehicles, cleaning outdoor facilities and services,
                     tidying up and refilling refrigerators and store shelves, serving costumers.
                </ProfessionalInfoLayout>
            </Grid>
            <Grid container>
                <ProfessionalInfoLayout place="University of Lleida scholarship holder for the WWEPS 2020 event" period="November 2020">
                    Modify the WWEPS website for the 2020 WWEPS event.
                </ProfessionalInfoLayout>
            </Grid>
            <Grid container>
                <ProfessionalInfoLayout place="Just Digital, S.L." period="October 2020 - January 2021">
                    <u>UX Designer practices</u> Review, analysis and design of interfaces
                    according to user needs.
                </ProfessionalInfoLayout>
            </Grid>
            <Grid container>
                <ProfessionalInfoLayout place="University of Lleida Introduction to Research scholarship" period="March 2021 - June 2021">
                    Analysis of a new tool proposed for the realization of heuristic evaluations in a 
                    international business context. As well as applying changes to improve it, which 
                    will lead to a new one version of this tool.
                </ProfessionalInfoLayout>
            </Grid>
        <Grid item>
            <Typography className={title2} variant="h5" >            
                Other experiences and charges
            </Typography>
        </Grid>
        <Grid item>
            <Grid container>
                <OtherInfoLayout place="Co-founder, ex treasurer and head of contacts of the LleidaHack association"/>
            </Grid>
            <Grid container>
                <OtherInfoLayout place="Volunteer in the First Lego League"/>
            </Grid>
            <Grid container>
                <OtherInfoLayout place="Second place in Hack Cambridge 2019"/>
            </Grid>
        </Grid>
        </Grid>
    </Grid>
  )
}

export default Professional