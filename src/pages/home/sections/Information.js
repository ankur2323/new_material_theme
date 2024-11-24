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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
    return (
        <MKBox component="section" py={6} my={6}>
            <Container>
                <Grid container item xs={11} spacing={3} alignItems="center" sx={{mx: "auto"}}>
                    <Grid item xs={12} lg={4} sx={{mx: "auto"}}>
                        <RotatingCard>
                            <RotatingCardFront
                                image={bgFront}
                                icon="touch_app"
                                title={
                                    <>
                                        Feel the
                                        <br/>
                                        Material Kit
                                    </>
                                }
                                description="All the MUI components that you need in a development have been re-design with the new look."
                            />
                            <RotatingCardBack
                                image={bgBack}
                                title="Discover More"
                                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                                action={{
                                    type: "internal",
                                    route: "/sections/page-sections/page-headers",
                                    label: "start with header",
                                }}
                            />
                        </RotatingCard>
                    </Grid>
                    <Grid item xs={12} lg={7} sx={{ml: "auto"}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <DefaultInfoCard
                                    icon="content_copy"
                                    title="Digital Transformation"
                                    description="Received an incredible support from SUVI. Their team seamlessly integrated our digital transformation strategy with expert accounting services. They helped us modernize our operations while maintaining a keen eye on our financial health. The results speak for themselves— improved efficiency, reduced costs, and peace of mind. Highly recommended!"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DefaultInfoCard
                                    icon="flip_to_front"
                                    title="Financial Reporting"
                                    description="SUVI’s comprehensive accounting services have brought clarity and precision to our financial management. Simultaneously, their digital experts guided us through a successful digital transformation journey."
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} sx={{mt: {xs: 0, md: 6}}}>
                            <Grid item xs={12} md={6}>
                                <DefaultInfoCard
                                    icon="price_change"
                                    title="Risk Consulting"
                                    description="Working with SUVI on our risk consulting needs has been a game-changer. Their team's proactive approach to identifying and mitigating risks has protected our investments and ensured business continuity. Their commitment to our success is commendable, and we're grateful for their partnership."
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DefaultInfoCard
                                    icon="devices"
                                    title="CFO Consulting"
                                    description="We engaged SUVI to augment our financial leadership with their CFO consulting expertise. Their team's financial acumen, strategic insights, and dedication to our success were truly exceptional. With their guidance, we've optimized our financial strategies, improved profitability, and charted a clear path to growth. Highly recommend their CFO consulting services!"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Information;
