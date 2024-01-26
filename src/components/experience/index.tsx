import React,{useState,useEffect} from 'react'
import '../../sass/_experience.scss';
import ExperienceTimeline from "./ExperienceTimeline";

export const ExperienceView = () => {
    /* Read data from .json file and sent them as props to be displayed in experience section */
    const [data,setData] = useState<any[]>([]);
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
