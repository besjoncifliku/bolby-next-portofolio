import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import {SocialMediaFeed} from "@/components/social-media-feed";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}


const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const a11yProps = (index: number) => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function SocialMediaTabs() {
    const [openedTab, setOpenedTab] = React.useState<number>(1);
    const theme = useTheme();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setOpenedTab(newValue);
    };


    const handleChangeIndex = (index: number) => {
        setOpenedTab(index);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={openedTab}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                centered
                aria-label="secondary tabs example"
            >
                <Tab value={1} label="Feed" />
                <Tab value={2} label="About" />
                <Tab value={3} label="GuestBook" />
            </Tabs>
            <div>
                <TabPanel value={openedTab} index={1} dir={theme.direction}>
                    <SocialMediaFeed />
                </TabPanel>
                <TabPanel value={openedTab} index={2} dir={theme.direction}>
                    <p className={'text-black'}>Item 2</p>
                </TabPanel>
                <TabPanel value={openedTab} index={3} dir={theme.direction}>
                    <p className={'text-black'}>Item 3</p>
                </TabPanel>
            </div>
        </Box>
    );
}