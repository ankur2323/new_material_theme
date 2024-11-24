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
    Autocomplete, InputLabel
} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import MKBox from "../../../components/MKBox";
import bgImage from "../../../assets/images/4k_background_Blockchain.gif";
import Container from "@mui/material/Container";
import MKTypography from "../../../components/MKTypography";

function Newproject() {
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
                }}
            >
            </MKBox>
            <Container sx={{background: "white"}}>

                <MKBox component="section" py={6}>
                    <Container>

                        <Grid container item xs={10} lg={2} marginRight="auto" textAlign="left">
                            <MKTypography variant="h3">
                                New Project
                            </MKTypography>
                        </Grid>
                        <form onSubmit={handleSubmit}>

                            <MKBox width="100%" component="form" method="post" autoComplete="off">

                                <Grid container spacing={3}>
                                    <Grid item md={6}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label="Project Name"
                                                variant="standard"
                                                fullWidth
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={6}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label="Engagement Id"
                                                variant="standard"
                                                fullWidth
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </FormControl>
                                    </Grid>


                                    <Grid item md={6}>
                                        <FormControl fullWidth>
                                            <TextField
                                                label="Client Name"
                                                variant="standard"
                                                fullWidth
                                                name="password"
                                                value={formData.clientName}
                                                onChange={handleChange}

                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={6} marginTop="8px">
                                        <FormControl fullWidth>
                                            <InputLabel id="" margin="0" padding="0">Solution Cluster</InputLabel>
                                            <Select
                                                variant="standard"
                                                name="solutionCluster"
                                                value={formData.solutionCluster}
                                                onChange={handleChange}
                                                placeholder="Solution Cluster"
                                                displayEmpty
                                                required
                                            >
                                                <MenuItem value="18-25">18-25</MenuItem>
                                                <MenuItem value="26-35">26-35</MenuItem>
                                                <MenuItem value="36-45">36-45</MenuItem>
                                                <MenuItem value="46-60">46-60</MenuItem>
                                                <MenuItem value="60+">60+</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="">Sub Solution</InputLabel>
                                            <Select
                                                label="Sub Solution"
                                                variant="standard"
                                                name="subSolution"
                                                value={formData.engagementManager}
                                                onChange={handleChange}
                                                displayEmpty
                                                required
                                            >
                                                <MenuItem value="18-25">18-25</MenuItem>
                                                <MenuItem value="26-35">26-35</MenuItem>
                                                <MenuItem value="36-45">36-45</MenuItem>
                                                <MenuItem value="46-60">46-60</MenuItem>
                                                <MenuItem value="60+">60+</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="">PMO Lead(US & GDS)</InputLabel>
                                            <Select
                                                label="PMO Lead(US & GDS)"
                                                variant="standard"
                                                name="pmoLead"
                                                value={formData.pmoLead}
                                                onChange={handleChange}
                                                displayEmpty
                                                required
                                            >
                                                <MenuItem value="">
                                                    <em>Select PMO Lead</em>
                                                </MenuItem>
                                                <MenuItem value="18-25">18-25</MenuItem>
                                                <MenuItem value="26-35">26-35</MenuItem>
                                                <MenuItem value="36-45">36-45</MenuItem>
                                                <MenuItem value="46-60">46-60</MenuItem>
                                                <MenuItem value="60+">60+</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="">Engagement Partner</InputLabel>
                                            <Select
                                                label="Engagement Partner"
                                                variant="standard"
                                                name="engagementPartner"
                                                value={formData.engagementPartner}
                                                onChange={handleChange}
                                                displayEmpty
                                                required
                                            >
                                                <MenuItem value="">
                                                    <em>Select Engagement Partner</em>
                                                </MenuItem>
                                                <MenuItem value="18-25">18-25</MenuItem>
                                                <MenuItem value="26-35">26-35</MenuItem>
                                                <MenuItem value="36-45">36-45</MenuItem>
                                                <MenuItem value="46-60">46-60</MenuItem>
                                                <MenuItem value="60+">60+</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={6}>
                                        <FormControl fullWidth>
                                            <InputLabel id="">Engagement Manager</InputLabel>
                                            <Select
                                                label="EngagementManager"
                                                variant="standard"
                                                name="engagementManager"
                                                value={formData.engagementManager}
                                                onChange={handleChange}
                                                displayEmpty
                                                required
                                            >
                                                <MenuItem value="">
                                                    <em>Select Engagement Manager</em>
                                                </MenuItem>
                                                <MenuItem value="18-25">18-25</MenuItem>
                                                <MenuItem value="26-35">26-35</MenuItem>
                                                <MenuItem value="36-45">36-45</MenuItem>
                                                <MenuItem value="46-60">46-60</MenuItem>
                                                <MenuItem value="60+">60+</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={6} marginTop="10px">
                                        <FormControl fullWidth>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    label="Estimated Start Date"
                                                    value={formData.startDate}
                                                    onChange={handleDateChange}
                                                    renderInput={(params) => <TextField {...params} fullWidth/>}
                                                />
                                            </LocalizationProvider>
                                        </FormControl>
                                    </Grid>

                                    <Grid item md={6} marginTop="10px">
                                        <FormControl fullWidth>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    label="Estimated End Date"
                                                    value={formData.endDate}
                                                    onChange={handleDateChange}
                                                    renderInput={(params) => <TextField {...params} fullWidth/>}
                                                />
                                            </LocalizationProvider></FormControl>
                                    </Grid>

                                    <Grid item marginLeft="auto">
                                        <Button variant="contained" color="white" type="submit" fullWidth>
                                            Submit
                                        </Button>
                                    </Grid>


                                </Grid>
                            </MKBox>


                        </form>
                    </Container>

                </MKBox>
            </Container>

        </>
    );
}

export default Newproject;
