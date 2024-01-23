import React, { useEffect, useState } from 'react'
import '../../sass/_work.scss';
import { ProjectElement } from "./projectElement";

export const ProjectView = (props: { projects: string | any[]; category: any; }) => {
    const projects = props.projects;
    const [postsToShow, setPostsToShow] = useState<any[]>([]);
    const [next, setNext] = useState(3);
    const postsPerPage: number = 6;
    let postProjects: any = [];

    const loopWithSlice = (start: number, end: number) => {
        const slicedPosts: any = projects.slice(start, end);
        postProjects = [...postProjects, ...slicedPosts];
        setPostsToShow(postProjects);
        console.log(props.projects.length);

    };

    useEffect(() => {
        projects && loopWithSlice(0, postsPerPage);
    }, [projects]);

    const displayMorePosts = () => {
        loopWithSlice(0, next + postsPerPage);
        setNext(next + postsPerPage);
    };

    return (
        <div className={'project-view-container'}>
            <div className="project-container">
                {
                    postsToShow && postsToShow.map(item =>
                        item.category.indexOf(props.category) !== -1 ? (<ProjectElement key={'projects.'+item.title} project={item}/>) : '')
                }
            </div>
            <div className={'load-more-projects'}>
                {
                    (props.projects && props.projects.length > next) ? (<a href={'/#'}  className={'button'} onClick={displayMorePosts}>Load More</a>) : ''
                }
            </div>
        </div>
    );
}

