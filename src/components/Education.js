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
                        dateText="09/2016 – Now"
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
                    <TimelineItem
                        key="004"
                        dateText="08/2015 – 8/2016"
                        dateInnerStyle={{ background: '#76bb7f' }}
                        bodyContainerStyle={{
                            background: 'none',
                        }}
                    >
                    <Box style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <AccountBalanceIcon style={{color: "#76bb7f", fontSize: "5rem", marginRight: "1rem"}} />
                            <div>
                                <h2 style={{ color: '#76bb7f' }}>SOFTWARE DESIGN AND DEVELOPMENT COURSE</h2>
                                <h3 style={{ color: '#76bb7f' }}>FPT POLYTECHNIC(FPT)</h3>
                            </div>
                    </Box>
                    </TimelineItem>
                    <TimelineItem
                        key="004"
                        dateText="08/2014 – 8/2015"
                        dateInnerStyle={{ background: '#FFD845', color: '#000' }}
                        bodyContainerStyle={{
                            background: 'none',
                        }}
                    >
                    <Box style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <ComputerIcon style={{color: "#FFD845", fontSize: "5rem", marginRight: "1rem "}} />
                            <div>
                                <h2 style={{ color: '#FFD845' }}>INFORMATION TECHNOLOGY(DROP OUT)</h2>
                                <h3 style={{ color: '#FFD845' }}>HANOI UNIVERSITY(HANU)</h3>
                            </div>
                        </Box>
                    </TimelineItem>
                </Timeline>
            </Box>
        </div>
    )
}
