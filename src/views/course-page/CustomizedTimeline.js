// material-ui
import { useTheme } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';

// assets
import FastfoodIcon from '@mui/icons-material/FastfoodTwoTone';
import LaptopMacIcon from '@mui/icons-material/LaptopMacTwoTone';
import HotelIcon from '@mui/icons-material/HotelTwoTone';
import RepeatIcon from '@mui/icons-material/RepeatTwoTone';

// ==============================|| UI TIMELINE - CUSTOMIZED ||============================== //

export default function CustomizedTimeline() {
    const theme = useTheme();
    const paper = {
        p: 2.5,
        boxShadow: 'none',
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.primary.light,
        border: '1px dashed',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.primary.dark
    };
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        9:30 am
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} sx={paper}>
                        <Typography variant="h5" component="h1">
                            Basic C Structure
                        </Typography>
                        <Typography>Heading Towards C Programming · 3 Topics</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        10:30 am
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} sx={paper}>
                        <Typography variant="h5" component="h1">
                            How to Print
                        </Typography>
                        <Typography>How to show Output? See, it&apos;s awesome! · 5 Topics</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        11:30 am
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} sx={paper}>
                        <Typography variant="h5" component="h1">
                            Variables
                        </Typography>
                        <Typography>Storing Data Into Variables · 4 Topics</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        12:30 noon
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} sx={paper}>
                        <Typography variant="h5" component="h1">
                            Arithmetic
                        </Typography>
                        <Typography>Number Manipulation · 5 Topics</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        01:30 pm
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} sx={paper}>
                        <Typography variant="h5" component="h1">
                            Asking For Input
                        </Typography>
                        <Typography>User Input · 5 Topics</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        02:30 pm
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <HotelIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} sx={paper}>
                        <Typography variant="h5" component="h1">
                            Assignment #1 to #7
                        </Typography>
                        <Typography>Max Score: 70pts · 7 Problem Statements</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        03:30 pm
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} sx={paper}>
                        <Typography variant="h5" component="h1">
                            Assignment #8 to #21
                        </Typography>
                        <Typography>Max Score: 140pts · 14 Problem Statements</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        03:30 pm
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} sx={paper}>
                        <Typography variant="h5" component="h1">
                            Assignment #8 to #21
                        </Typography>
                        <Typography>Max Score: 140pts · 14 Problem Statements</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
