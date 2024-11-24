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
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";

// Images
import aman from "assets/images/aman_garg.jpeg";

function AvatarSize() {
    return (
        <MKBox component="section" py={12}>
            <Container>
                <Grid container justifyContent="center">
                    <Stack direction="row" alignItems="flex-end" spacing={1}>
                        <MKAvatar src={aman} alt="xs" size="xs"/>
                        <MKAvatar src={aman} alt="sm" size="sm"/>
                        <MKAvatar src={aman} alt="md" size="md"/>
                        <MKAvatar src={aman} alt="lg" size="lg"/>
                        <MKAvatar src={aman} alt="xl" size="xl"/>
                        <MKAvatar src={aman} alt="xxl" size="xxl"/>
                    </Stack>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default AvatarSize;
