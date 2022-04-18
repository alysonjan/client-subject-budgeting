import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
};
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    // const [selectedValue, setSelectedValue] = React.useState('a');
    // const handleChange = (event) => {
    //     setSelectedValue(event.target.value);
    // };

    return (
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Block 1" {...a11yProps(0)} />
            <Tab label="Block 2" {...a11yProps(1)} />
            <Tab label="Block 3" {...a11yProps(2)} />
            <Tab label="Block 4" {...a11yProps(3)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            <div style={{display:'flex', justifyContent:'space-between'}}>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Days</label>
                    <div>
                        <Checkbox {...label} />Monday
                    </div>
                    <div>
                        <Checkbox {...label} />Tuesday
                    </div>
                    <div>
                        <Checkbox {...label} />Wednesday
                    </div>
                    <div>
                        <Checkbox {...label} />Thursday
                    </div>
                    <div>
                        <Checkbox {...label} />Friday
                    </div>
                    <div>
                        <Checkbox {...label} />Saturday
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Time</label>
                    <div>
                        <Checkbox {...label}  value="7:00 AM - 8:00 AM" />7:00 AM - 8:00 AM
                    </div>
                    <div>
                        <Checkbox {...label} value="8:00 AM - 11:00 AM" />8:00 AM - 11:00 AM
                    </div>
                    <div>
                        <Checkbox {...label} value="1:00 PM - 3:00 PM" />1:00 PM - 3:00 PM
                    </div>
                    <div>
                        <Checkbox {...label} value="1:00 PM - 4:00 PM" />1:00 PM - 4:00 PM
                    </div>
                    <div>
                        <Checkbox {...label} value="4:00 PM - 5:00 PM" />4:00 PM - 5:00 PM
                    </div>
                    <div>
                        <Checkbox {...label} value="5:00 PM - 6:00 PM" />5:00 PM - 6:00 PM
                    </div>
                </div>

            </div>

        </TabPanel>
        <TabPanel value={value} index={1}>
            <div style={{display:'flex', justifyContent:'space-between'}}>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Days</label>
                    <div>
                        <Checkbox {...label} />Monday
                    </div>
                    <div>
                        <Checkbox {...label} />Tuesday
                    </div>
                    <div>
                        <Checkbox {...label} />Wednesday
                    </div>
                    <div>
                        <Checkbox {...label} />Thursday
                    </div>
                    <div>
                        <Checkbox {...label} />Friday
                    </div>
                    <div>
                        <Checkbox {...label} />Saturday
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Time</label>
                    <div>
                        <Checkbox {...label}  value="7:00 AM - 8:00 AM" />7:00 AM - 8:00 AM
                    </div>
                    <div>
                        <Checkbox {...label} value="8:00 AM - 11:00 AM" />8:00 AM - 11:00 AM
                    </div>
                    <div>
                        <Checkbox {...label} value="1:00 PM - 3:00 PM" />1:00 PM - 3:00 PM
                    </div>
                    <div>
                        <Checkbox {...label} value="1:00 PM - 4:00 PM" />1:00 PM - 4:00 PM
                    </div>
                    <div>
                        <Checkbox {...label} value="4:00 PM - 5:00 PM" />4:00 PM - 5:00 PM
                    </div>
                    <div>
                        <Checkbox {...label} value="5:00 PM - 6:00 PM" />5:00 PM - 6:00 PM
                    </div>
                </div>

            </div>

        </TabPanel>
        <TabPanel value={value} index={2}>
            <div style={{display:'flex', justifyContent:'space-between'}}>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Days</label>
                    <div>
                        <Checkbox {...label} />Monday
                    </div>
                    <div>
                        <Checkbox {...label} />Tuesday
                    </div>
                    <div>
                        <Checkbox {...label} />Wednesday
                    </div>
                    <div>
                        <Checkbox {...label} />Thursday
                    </div>
                    <div>
                        <Checkbox {...label} />Friday
                    </div>
                    <div>
                        <Checkbox {...label} />Saturday
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Time</label>
                    <div>
                        <Checkbox {...label}  value="7:00 AM - 8:00 AM" />7:00 AM - 8:00 AM
                    </div>
                    <div>
                        <Checkbox {...label} value="8:00 AM - 11:00 AM" />8:00 AM - 11:00 AM
                    </div>
                    <div>
                        <Checkbox {...label} value="1:00 PM - 3:00 PM" />1:00 PM - 3:00 PM
                    </div>
                    <div>
                        <Checkbox {...label} value="1:00 PM - 4:00 PM" />1:00 PM - 4:00 PM
                    </div>
                    <div>
                        <Checkbox {...label} value="4:00 PM - 5:00 PM" />4:00 PM - 5:00 PM
                    </div>
                    <div>
                        <Checkbox {...label} value="5:00 PM - 6:00 PM" />5:00 PM - 6:00 PM
                    </div>
                </div>

            </div>

        </TabPanel>
        <TabPanel value={value} index={3}>
            <div style={{display:'flex', justifyContent:'space-between'}}>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Days</label>
                    <div>
                        <Checkbox {...label} />Monday
                    </div>
                    <div>
                        <Checkbox {...label} />Tuesday
                    </div>
                    <div>
                        <Checkbox {...label} />Wednesday
                    </div>
                    <div>
                        <Checkbox {...label} />Thursday
                    </div>
                    <div>
                        <Checkbox {...label} />Friday
                    </div>
                    <div>
                        <Checkbox {...label} />Saturday
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'column'}}>
                    <label>Time</label>
                    <div>
                        <Checkbox {...label}  value="7:00 AM - 8:00 AM" />7:00 AM - 8:00 AM
                    </div>
                    <div>
                        <Checkbox {...label} value="8:00 AM - 11:00 AM" />8:00 AM - 11:00 AM
                    </div>
                    <div>
                        <Checkbox {...label} value="1:00 PM - 3:00 PM" />1:00 PM - 3:00 PM
                    </div>
                    <div>
                        <Checkbox {...label} value="1:00 PM - 4:00 PM" />1:00 PM - 4:00 PM
                    </div>
                    <div>
                        <Checkbox {...label} value="4:00 PM - 5:00 PM" />4:00 PM - 5:00 PM
                    </div>
                    <div>
                        <Checkbox {...label} value="5:00 PM - 6:00 PM" />5:00 PM - 6:00 PM
                    </div>
                </div>
            </div>

        </TabPanel>
        </Box>
    );
}
