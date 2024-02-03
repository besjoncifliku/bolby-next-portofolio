import React, { useEffect, useState } from 'react'
import { ProjectElement } from "./ProjectElement";
import { useInView, useSpring, animated } from "@react-spring/web";
import { buildInteractionObserverThreshold } from "@/utils/threshold.utils";

import '../../sass/_work.scss';

export const ProjectView = (props: { projects: any[]; category: any; }) => {
    const projects: any[] = props.projects;
    const postsPerPage: number = 6;
    let postProjects: any = [];

    const [postsToShow, setPostsToShow] = useState<any[]>([]);
    const [displayPosts, setDisplayPosts] = useState<boolean>(true);
    const [next, setNext] = useState(3);

    const loopWithSlice = (start: number, end: number) => {
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
                            <ProjectElement key={`projects.${item.title}`} project={item}/>)
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

