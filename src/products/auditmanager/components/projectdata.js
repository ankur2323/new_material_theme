import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TreeTableView from "./tableview";

function CustomTabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{p: 3}}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function Projectdata() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box >
            <Box sx={{
                '& .MuiTabs-indicator': {borderBottom: 2, borderColor: 'blue',background: '#eaeaea',},
                background: 'none',
                borderBottom: 2,
                borderColor: '#eaeaea',
                padding: 0,
            }}>
            <Tabs value={value} onChange={handleChange} sx={{
                '& .MuiTabs-indicator': {borderBottom: 2, borderColor: 'blue',background: '#eaeaea',},
                background: 'none',        padding: 0,
                width:'35%'
            }}>

                <Tab label="Project Plan"/>
                <Tab label="Raid"/>
                <Tab label="Critical Path Analysis"/>
            </Tabs>
            </Box>


            <CustomTabPanel value={value} index={0}>
                <TreeTableView sx={{ all: 'unset', backgroundColor: 'white' }} ></TreeTableView>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>

        </Box>


    );
}
