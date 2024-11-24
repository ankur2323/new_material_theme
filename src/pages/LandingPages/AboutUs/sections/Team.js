/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import jatin from "assets/images/jatin_bhatia.jpeg";
import ritesh from "assets/images/jatin_bhatia.jpeg";
import ankur from "assets/images/ankur_tiwari.jpeg";
import aman from "assets/images/aman_garg.jpeg";


function Team() {
    return (
        <MKBox
            component="section"
            variant="gradient"
            bgColor="light"
            position="relative"
            py={6}
            px={{xs: 2, lg: 0}}
            mx={-2}
        >
            <Container>
                <Grid container>
                    <Grid item xs={12} md={12} sx={{mb: 6, textAlign: "center"}}>
                        <MKTypography variant="h3" color="Black">
                            The Executive Team
                        </MKTypography>
                        <MKTypography variant="body2" color="Black" opacity={0.9}>
                            There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get good
                            at. That&apos;s my skill.
                        </MKTypography>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                        <MKBox mb={1}>
                            <HorizontalTeamCard
                                image={jatin}
                                name="Jatin Bhatia"
                                position={{color: "info", label: "Head, Accounting & Digital Transformation"}}
                                description="Head, Accounting & Digital Transformation"
                            />
                        </MKBox>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <MKBox mb={1}>
                            <HorizontalTeamCard
                                image={jatin}
                                name="Ritesh Shah"
                                position={{color: "info", label: "Head, CFO Consulting & Financial Reporting"}}
                                description="Head, CFO Consulting & Financial Reporting"
                            />
                        </MKBox>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <MKBox mb={{xs: 1, lg: 0}}>
                            <HorizontalTeamCard
                                image={ankur}
                                name="Ankur Tiwari"
                                position={{color: "info", label: "System Engineer"}}
                                description="Developer"
                            />
                        </MKBox>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <MKBox mb={{xs: 1, lg: 0}}>
                            <HorizontalTeamCard
                                image={aman}
                                name="Aman Garg"
                                position={{color: "info", label: "JS Developer"}}
                                description="Lead Manager"
                            />
                        </MKBox>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Team;
