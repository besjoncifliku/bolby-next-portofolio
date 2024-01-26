import React, { forwardRef, cloneElement } from 'react';
import { Modal } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import {
    ProjectElementLeftSide,
    ProjectElementModal,
    ProjectElementRightSide
} from "@/utils/styledComponents.utils";
import PropTypes from 'prop-types';
import { Carousel } from "@/components/carousel";
import { MetaTab } from "@/components/meta-tab";


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
            outline: 'none'
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
                        <Carousel/>
                        <a href="#"
                           className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <h2 className={'text-2xl font-bold tracking-tight text-gray-900 dark:text-white'}>{props.project.title}</h2>
                        </a>
                        <MetaTab></MetaTab>
                        <p className={'text-gray-700'}>{props.project.description}</p>
                    </ProjectElementLeftSide>
                    <ProjectElementRightSide>
                        <div className={'text-gray-950'}>{props.project.category}</div>
                        <div className={'text-gray-950'}>{props.project.tech}</div>
                        <a href={'/#'} className={'text-gray-400 text-xs'}>{props.project.link}</a>
                    </ProjectElementRightSide>
                </ProjectElementModal>
            </Fade>
        </Modal>
    );
}
