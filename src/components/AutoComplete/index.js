import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MKBox from "../MKBox";
import {InputLabel} from "@mui/material";

export default function BasicSelect() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <MKBox sx={{minWidth: 120}}>
            <InputLabel id="demo-simple-select-label">Solution Cluster</InputLabel>
            <FormControl fullWidth>
                <Select variant="standard"
                        id="solution-cluster-select"
                        value={age}
                        onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </MKBox>
    );
}