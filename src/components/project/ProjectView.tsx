import React, { useEffect, useState } from 'react'
import { useInView, useSpring, animated } from "@react-spring/web";
import { buildInteractionObserverThreshold } from "@/utils/Threshold.utils";
import { CenteredModal } from "@/components/_generics/CenteredModal";
import { useMediaQuery } from '@mui/material';

import '../../sass/_general.scss';
import {ProjectModal} from "@/components/project/ProjectModal";

const ProjectElement = (props: any) => {
    const project = props.project;
    const [open, setOpen] = useState(false);
    const style = props.style;

    const handleUpdateState = (newState: boolean) => {
        setOpen(newState);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <div className="project-element rounded shadow-dark padding-30" style={style} onClick={handleOpen}>
                <div className={'project-image'}>
                    <h2>{project.title}</h2>
                </div>
                <div className={'project-info'}>
                    <div className={'project-title'}>
                        <h2>{project.title}</h2>
                    </div>
                </div>
                <div className={'git-hub-link'}>
                    <i className="fab fa-github"></i>
                </div>
                <div className={'project-category'}>
                    <span>{project.category[1]}, {project.category[2]}</span>
                </div>
            </div>
            {open &&
                <CenteredModal
                    key={project.title}
                    openModal={open}
                    closeModal={handleUpdateState}
                    contentContainerChild={ <ProjectModal {...project} /> }
                />
            }
        </>
    );
}

export const ProjectView = (props: { projects: any[]; category: any; }) => {
    const isMobile = useMediaQuery('(max-width: 599px)');
    const projects: any[] = props.projects;
    const postsPerPage: number = isMobile ? 3 : 6;
    let postProjects: any = [];

    const [postsToShow, setPostsToShow] = useState<any[]>([]);
    const [displayPosts, setDisplayPosts] = useState<boolean>(true);
    const [next, setNext] = useState(3);

    const loopWithSlice = (start: number, end: number): void => {
        const slicedPosts: any[] = projects.slice(start, end);
        postProjects = [...postProjects, ...slicedPosts];
        setPostsToShow(postProjects);
    };

    useEffect(() => {
        setNext(3);
        projects && loopWithSlice(0, postsPerPage);
    }, [projects, props.category]);

    useEffect(() => {
        postsToShow && postsToShow.length ? setDisplayPosts(true) : setDisplayPosts(false);
    }, [postsToShow]);

    const displayMorePosts = () => {
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (!loadMoreBtn) {
            return;
        }
        loadMoreBtn.innerHTML = '<div>Loading</div>';
        loopWithSlice(0, next + postsPerPage);
        setNext(next + postsPerPage);
        loadMoreBtn.innerHTML = '<div>Done</div>';
    };

    const [ref, isInView] = useInView({
        rootMargin: '10% 0px 2% 0px',
        amount: buildInteractionObserverThreshold()
    });

    const styles = useSpring({
        scale: isInView ? 1 : 0,
        config: {
            tension: 300,
        },
        reset: true
    });

    return (
        <div className={'project-view-container'}>
            <animated.div style={styles} className={'project-container ' + (displayPosts ? '' : 'justify-center')}  ref={ref}>
                {
                    displayPosts
                        ? postsToShow.map(item =>
                            <ProjectElement key={`projects.${item.title}`} project={item} style={isMobile ? {width: "90%", margin: "15px auto"} : {}}/>)
                        : <h2 className={'text-gray-400 text-xl text-center mb-9 mt-8'}>Sorry, no projects were found. Search something else...</h2>
                }
            </animated.div>
            <div className={'load-more-projects'}>
                {
                    projects && projects.length > next
                        ? (<a href={'/#'}  className={'button'} id={'load-more-btn'} onClick={displayMorePosts}>Load More</a>) : ''
                }
            </div>
        </div>
    );
}

