import React, { useState, forwardRef } from 'react';
import { Modal, Backdrop } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import { ProjectElement } from "@/utils/styledComponents.utils";
import PropTypes from 'prop-types';

const Fade = forwardRef(function Fade(props: any, ref) {
    const {in: open, children, onEnter, onExited, ...other} = props;
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
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

export const SpringModal = (props: any) => {
    const [open, setOpen] = useState<boolean>(props.open);

    const handleClose = () => {
        setOpen(false);
        props.onUpdateModal(false);
        console.log(open);
    };

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            className={'flex items-center content-center justify-items-center justify-center'}
        >
            <Fade in={open}>
                <ProjectElement>
                    <h2 id="spring-modal-title">{props.project.title}</h2>
                    <p id="spring-modal-description">{props.project.description}</p>
                </ProjectElement>
            </Fade>
        </Modal>

    );
}
