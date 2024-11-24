import MKBox from "../../../components/MKBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "../../../components/MKTypography";
import TransparentBlogCard from "../../../examples/Cards/BlogCards/TransparentBlogCard";
import post1 from "../../../assets/images/examples/testimonial-6-2.jpg";
import post2 from "../../../assets/images/examples/testimonial-6-3.jpg";
import post3 from "../../../assets/images/examples/blog-9-4.jpg";
import MKButton from "../../../components/MKButton";


function AllItems() {
    return (<Container sx={{background: "white"}}>
            <MKBox component="section" py={5}>

                <Grid container item xs={12} lg={12}>
                    <MKTypography variant="h3" mb={6}>
                        All Items
                    </MKTypography>
                    <MKBox ml="auto">
                        <MKButton variant="contained" color="white" href="/newproject">
                            Create new Project
                        </MKButton>
                    </MKBox>
                </Grid>
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TransparentBlogCard
                            image={post1}
                            title="Demo Peoject "
                            description="Finding temporary housing for your dog should be as easy as renting an Airbnb. That’s the idea behind Rover ..."
                            action={{
                                type: "internal",
                                route: "/viewproject",
                                color: "dark",
                                label: "read more",
                                progress: "60"
                            }}
                        />

                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TransparentBlogCard
                            image={post2}
                            title="MateLabs machine learning"
                            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                            action={{
                                type: "internal",
                                route: "/pages/blogs/author",
                                color: "dark",
                                label: "read more",
                                progress: "50"
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TransparentBlogCard
                            image={post3}
                            title="MateLabs machine learning"
                            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                            action={{
                                type: "internal",
                                route: "/pages/blogs/author",
                                color: "dark",
                                label: "read more",
                                progress: "30"
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <TransparentBlogCard
                            image={post2}
                            title="MateLabs machine learning"
                            description="If you’ve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                            action={{
                                type: "internal",
                                route: "/pages/blogs/author",
                                color: "dark",
                                label: "read more",
                                progress: "100"
                            }}
                        />
                    </Grid>
                </Grid>

            </MKBox>
        </Container>
    )
}

export default AllItems