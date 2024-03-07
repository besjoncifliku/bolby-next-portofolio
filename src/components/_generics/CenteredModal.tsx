import React, { forwardRef, cloneElement, type JSX } from 'react';
import { Modal } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';
import PropTypes from 'prop-types';

import '../../sass/_general.scss';

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
            { cloneElement(children, { onClick }) }
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


type CenteredModalFC = {
    openModal: boolean;
    closeModal: (newState: boolean) => void;
    contentContainerChild?: JSX.Element
};

export const CenteredModal = ({ openModal, closeModal, contentContainerChild }: CenteredModalFC) => {

    // this will lift the state up to the parent component
    // https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example
    const handleClose = () => {
        closeModal(false);
    };

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={openModal}
            onClose={handleClose}
            className={'flex items-center content-center justify-items-center justify-center'}
            closeAfterTransition
            slotProps={{
                backdrop: {
                    TransitionComponent: Fade
                }
            }}
        >
            <Fade className={'fade-element'} in={openModal} >
                { contentContainerChild ? cloneElement(contentContainerChild) : <></> }
            </Fade>
        </Modal>
    );
}
