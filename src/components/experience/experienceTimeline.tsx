import React from 'react';
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineSeparator
} from '@mui/lab';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import Experience from "./experienceElement";

export default function ExperienceTimeline(props: any) {
    return (
        <Timeline>
            {
                props.experience && props.experience.length > 0 && props.experience.map((item: { title: any; role: string; display: any; }) =>
                    <TimelineItem key={item.title}>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                                {item.role === 'education' ? <CodeIcon/> : <WorkIcon/>}
                            </TimelineDot>
                            {item.display && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Experience key={item} data={item}/>
                        </TimelineContent>
                    </TimelineItem>
            )
            }
        </Timeline>
    );
}