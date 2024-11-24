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
import MuiAvatarGroup from "@mui/material/AvatarGroup";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";

// Images
import aman from "assets/images/aman_garg.jpeg";


function AvatarGroup() {
    return (
        <MKBox component="section" py={12}>
            <Container>
                <Grid container justifyContent="center">
                    <MuiAvatarGroup spacing={12}>
                        <MKAvatar src={aman} alt="team 1" size="lg"/>
                        <MKAvatar src={aman} alt="team 2" size="lg"/>
                        <MKAvatar src={aman} alt="team 3" size="lg"/>
                        <MKAvatar src={aman} alt="team 4" size="lg"/>
                    </MuiAvatarGroup>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default AvatarGroup;
