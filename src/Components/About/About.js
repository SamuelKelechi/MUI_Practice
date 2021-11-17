import React from 'react'
import Styled from 'styled-components'
import {Grid, Card} from '@mui/material'


const About = () => {
    return(
        <MainContainer>
            <div>
            <Grid container spacing={2}>
                <Grid  item sm={3}>
                    <Grid>
                       <Card>
                           HI
                       </Card>
                    </Grid>
                    <Grid>
                        <Card>
                           HI
                       </Card>
                    </Grid>
                    <Grid>
                        <Card>
                           HI
                       </Card>
                    </Grid>
                </Grid>    
            </Grid>
            </div>
        </MainContainer>

    )
}

export default About;

const MainContainer = Styled.div`
display: flex;
justify-content: center;
 div{
     width: 100%;
     display: flex;
     justify-content: center;
 }
`