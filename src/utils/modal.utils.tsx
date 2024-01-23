import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Backdrop } from '@mui/material';
import { animated, useSpring } from '@react-spring/web';

// const useStyles = makeStyles((theme: any) => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));

const Fade = React.forwardRef(function Fade(props: any, ref) {
    const {in: open, children, onEnter, onExited, ...other} = props;
    const style = useSpring({
        from: {opacity: 0},
        to: {opacity: open ? 1 : 0},
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

export default function SpringModal(props: any) {
    const [open, setOpen] = React.useState(props.open);

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
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    TransitionComponent: Fade
                }
            }}
        >
            <Fade in={open}>
                <div>
                    <h2 id="spring-modal-title">{props.project.title}</h2>
                    <p id="spring-modal-description">{props.project.description}</p>
                </div>
            </Fade>
        </Modal>

    );
}