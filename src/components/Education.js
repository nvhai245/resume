import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SchoolIcon from '@material-ui/icons/School';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ComputerIcon from '@material-ui/icons/Computer';

export default function Education() {
    return (
        <div>
            <Box fontFamily="Monospace" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <Typography variant="h3" gutterBottom style={{ color: "white" }}>
                    Education
                </Typography>
                <Timeline lineColor={'#ddd'}>
                    <TimelineItem
                        key="002"
                        dateText="10/2019"
                        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                        bodyContainerStyle={{
                            background: 'none',
                        }}
                    >
                        <Box style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <SchoolIcon style={{color: "#61B8FF", fontSize: "5rem", marginRight: "1rem"}} />
                            <div>
                                <h2 style={{ color: '#61b8ff' }}>BACHELOR IN COMMERCE AND BUSINESS MANAGEMENT</h2>
                                <h3 style={{ color: '#61b8ff' }}>NATIONAL ECONOMIC UNIVERSITY(NEU)</h3>
                            </div>
                        </Box>
                    </TimelineItem>
                </Timeline>
            </Box>
        </div>
    )
}
