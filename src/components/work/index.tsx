import React, {useState,useEffect} from 'react'
import '../../sass/_work.scss';
import {ProjectView} from "./projectView";

export const WorkView = () => {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);

    const getData=()=>{
        fetch('projects.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setProjects(myJson)
            });
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <div className="work">
            <h2 className={'header-title'}>Recent Projects<span>.</span></h2>
            <div className={'work-section'}>
                <div className={'work-filter'}>
                    <a href={'/#'} className={filter === 'all' ? 'active' : ''} onClick={() =>
                        setFilter('all')}>See All</a>
                    <a href={'/#'} className={filter === 'javascript' ? 'active' : ''} onClick={() =>
                        setFilter('javascript')}>Javascript</a>
                    <a href={'/#'} className={filter === 'python' ? 'active' : ''} onClick={() =>
                        setFilter('python')}>Python</a>
                    <a href={'/#'} className={filter === 'java' ? 'active' : ''} onClick={() =>
                        setFilter('java')}>Java</a>
                    <a href={'/#'} className={filter === 'other' ? 'active' : ''} onClick={() =>
                        setFilter('other')}>Other</a>
                </div>
                <div className={'project-section'}>
                    <ProjectView  projects={projects} category={filter}/>
                </div>
            </div>
        </div>
    );
}

