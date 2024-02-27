import React, { forwardRef, cloneElement } from 'react';
import { Modal } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import {
    ProjectElementCategory,
    ProjectElementLeftSide,
    ProjectElementModal,
    ProjectElementRightSide,
    ProjectElementTechStack
} from "@/styled-components/projects.styled";
import PropTypes from 'prop-types';
import { Carousel } from "@/components/carousel";
import { ProjectDescription } from "@/components/project-description";

import '../sass/_general.scss';

const Fade = forwardRef(function Fade(props: any, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;

    const style = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: open ? 1 : 0,
            display: 'flex',
            'justify-content': 'center',
            outline: 'none',
            width: '62%',
            position: 'absolute'
        },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null as any, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null as any, true);
            }
        }
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {cloneElement(children, { onClick })}
        </animated.div>
    );
});


Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    onClick: PropTypes.any,
    ownerState: PropTypes.any
};

export const SpringModal = (props: any) => {

    const techStack: string[] = props.project.tech?.split(', ') ?? [];

    // this will lift the state up to the parent component
    // https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example
    const handleClose = () => {
        props.onUpdateModal(false);
    };

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={props.open}
            onClose={handleClose}
            className={'flex items-center content-center justify-items-center justify-center'}
            closeAfterTransition
            slotProps={{
                backdrop: {
                    TransitionComponent: Fade
                }
            }}
        >
            <Fade className={'fade-element'} in={props.open}>
                <ProjectElementModal>
                    <ProjectElementLeftSide>
                        <p className={'absolute top-0.5 left-1 text-gray-400 text-xs'}>{props.project.date}</p>
                        {/*<Carousel/>*/}
                        <ProjectDescription title={props.project.title} description={props.project.description}></ProjectDescription>
                    </ProjectElementLeftSide>
                    <ProjectElementRightSide>
                        <ProjectElementTechStack>
                            <div className="tools">
                                <div className="circle">
                                    <span className="red box"></span>
                                </div>
                                <div className="circle">
                                    <span className="yellow box"></span>
                                </div>
                                <div className="circle">
                                    <span className="green box"></span>
                                </div>
                                <div className={'stack-description'}>techStack.tsx</div>
                            </div>
                            <p className={'tech-stack-container'}>
                                {techStack.map((element: string) => (
                                    <span key={element} className={'tech-stack-badge'}>{element.toLowerCase()}</span>
                                ))}
                            </p>
                            <a href={'/#'} className={'text-gray-400 text-xs p-2'}>{props.project.link}</a>
                        </ProjectElementTechStack>
                        <ProjectElementCategory>
                            {props.project.category}
                        </ProjectElementCategory>
                    </ProjectElementRightSide>
                </ProjectElementModal>
            </Fade>
        </Modal>
    );
}
