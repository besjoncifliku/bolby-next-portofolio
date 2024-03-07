import React, { useEffect, useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { a, useSpring, config } from '@react-spring/web';
import type { JSX } from 'react';
import Backdrop from '@mui/material/Backdrop';
import styles from './styles.module.css';

type GuestBookFC = {
    openBook: boolean;
    closeGuestBook: (newState: boolean) => void;
    children?: any
};

/**
 * Based on React Use Gesture package - add a bottom sheet with option to extend
 * @param openBook
 * @param closeGuestBook
 * @constructor
 */
export const GuestBook = ({openBook, closeGuestBook}: GuestBookFC): JSX.Element => {
    // Maximum height in addition to the height provided in the styles
    const maxHeight = 330;

    const [{ y }, api] = useSpring(() => ({ y: maxHeight }));

    const [heightX, setHeight] = useState<number>(maxHeight);

    const open = ({ canceled }: any) => {
        // when cancel is true, it means that the user passed the upwards threshold,
        // so we change the spring config to create a nice wobbly effect
        api.start({ y: 450, immediate: false, config: canceled ? config.wobbly : config.stiff });
    }

    const close = (velocity = 0) => {
        api.start({ y: maxHeight, immediate: false, config: { ...config.stiff, velocity } });
    }

    const bind = useDrag(
        ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel, canceled }) => {
            // cancel and resets to open position
            if (oy < -50) cancel();

            // when the user releases the sheet, we check whether it passed
            // the threshold for it to close, or if we reset it to its open positino
            if (last) {
                oy > maxHeight * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : open({ canceled });
            }
            // when the user keeps dragging, we just move the sheet according to
            // the cursor position
            // api.start({ y: oy, immediate: true });
            api.start({ y: oy, immediate: false, config: { ...config.stiff} });

        },
        { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
    );

    const disableScrollOnBackdrop = (event: React.TouchEvent<HTMLElement>) => {
        event.preventDefault();
    }

    const handleClose = () => {
        closeGuestBook(false);
    };

    const display = y.to((py) => (py < maxHeight ? 'block' : 'none'))

    return (
        <div className="flex" style={{ overflow: 'hidden' }}>
            <div className={styles.actionBtn} onClick={(e) => open(e)} />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBook}
                onClick={handleClose}
                onScroll={disableScrollOnBackdrop}
            >
                <a.div className={styles.sheet} style={{display, bottom: `calc(-100vh + ${maxHeight - 600}px)`, y}}>
                    <div className={'grab-cursor text-gray-800'} {...bind()} >Drag Me</div>
                    <div className={'text-gray-800 h-28'}>Container</div>
                </a.div>
            </Backdrop>

        </div>
    )
}
