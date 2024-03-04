import React,{useState,useEffect} from 'react'
import '../../sass/_experience.scss';
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

function ExperienceTimeline(props: any) {
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

function Experience(props: any) {
    return (
        <div className={'experience-element'}>
            <div className={'experience-timeline'}>
                {props.data.timeline}
            </div>
            <div className={'experience-title'}>
                <h2>{props.data.title}</h2>
            </div>
            <div className={`'experience-description' ${props.data.display ? "last" : ""}`}>
                <p>{props.data.description}</p>
            </div>
        </div>
    );
}

export const ExperienceView = () => {
    /* Read data from .json file and sent them as props to be displayed in experience section */
    const [data,setData] = useState<any[]>([]);

    // Just for testing purposes I am using an api call instead of static data
    const getData=()=>{
        fetch('./experience.json',{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(async function(response){
            const data = await response.json();
            setData(data);
        });
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div className="experience">
            <h2 className={'header-title'}>Experience<span>.</span></h2>
            <div className={'experience-section'}>
                <div className={'learning-box rounded shadow-dark'}>
                    <div>
                        <ExperienceTimeline experience={data.slice(0,3)}/>
                    </div>
                </div>
                <div className={'experience-box rounded shadow-dark'}>
                    <div>
                        <ExperienceTimeline experience={data.slice(3,6)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
