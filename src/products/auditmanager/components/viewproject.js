import React, {useState} from 'react';
import {
    TextField,
    Checkbox,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    Select,
    MenuItem,
    Slider,
    Button,
    Switch,
    Grid,
    Autocomplete, InputLabel, CardMedia, CardActionArea, CardContent
} from '@mui/material';
import MKBox from "../../../components/MKBox";
import bgImage from "../../../assets/images/4k_background_Blockchain.gif";
import Container from "@mui/material/Container";
import MKTypography from "../../../components/MKTypography";
import Box from "@mui/material/Box";
import {Gauge, gaugeClasses} from '@mui/x-charts/Gauge';
import Tab from "@mui/material/Tab";
import * as PropTypes from "prop-types";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import Tabs from "@mui/material/Tabs";
import Projectdata from "./projectdata";

function CustomTabPanel(props) {
    return null;
}

CustomTabPanel.propTypes = {
    index: PropTypes.number,
    value: PropTypes.number,
    children: PropTypes.node
};

function ViewProject() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        clientName: '',
        solutionCluster: ''
    });

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            birthDate: date,
        });
    };

    const handleAutoCompleteChange = (event, newValue) => {
        setFormData({
            ...formData,
            autoCompleteOption: newValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    const settings = {
        width: 200,
        height: 200,
        value: 60,
    };

    const [value, setValue] = React.useState(0);

    const handleChange1 = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <MKBox
                minHeight="10vh"
                width="100%"
                sx={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    display: "grid",
                    placeItems: "center",
                }}>
            </MKBox>

            <Container sx={{background: "white"}} style={{paddingBottom: 15}}>

                <MKBox component="section" py={6}>


                    <Grid container item xs={10} lg={2} marginRight="auto" textAlign="left">
                        <MKTypography variant="h3">
                            New Project
                        </MKTypography>
                    </Grid>
                </MKBox>


                <Grid container>
                    <Grid container item md={6}>
                        <Grid>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={bgImage}
                                    alt="green iguana"
                                />
                                {/* <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>*/}
                            </CardActionArea>
                        </Grid>

                    </Grid>


                    <Grid container item md={6}>

                        <Grid item md={4}>
                            <Gauge
                                {...settings}
                                cornerRadius="50%"
                                sx={(theme) => ({
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 40,
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                        fill: '#52b202',
                                    },
                                    [`& .${gaugeClasses.referenceArc}`]: {
                                        fill: theme.palette.text.disabled,
                                    },
                                })}
                            />
                        </Grid>
                        <Grid item md={4}>
                            <Gauge
                                {...settings}
                                cornerRadius="50%"
                                sx={(theme) => ({
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 40,
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                        fill: '#52b202',
                                    },
                                    [`& .${gaugeClasses.referenceArc}`]: {
                                        fill: theme.palette.text.disabled,
                                    },
                                })}
                            />
                        </Grid>
                        <Grid item md={4}>
                            <Gauge
                                {...settings}
                                cornerRadius="50%"
                                sx={(theme) => ({
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 40,
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                        fill: '#52b202',
                                    },
                                    [`& .${gaugeClasses.referenceArc}`]: {
                                        fill: theme.palette.text.disabled,
                                    },
                                })}
                            />
                        </Grid>
                    </Grid>


                </Grid>

                <Projectdata></Projectdata>
            </Container>

        </>
    );
}

export default ViewProject;
