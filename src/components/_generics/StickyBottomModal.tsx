import React, {cloneElement, forwardRef, useEffect, useRef, useState} from 'react';
import { useDrag } from '@use-gesture/react';
import { a, useSpring, config, animated } from '@react-spring/web';
import type { JSX } from 'react';
import Backdrop from '@mui/material/Backdrop';
import PropTypes from "prop-types";

type BottomSheetFC = {
    openModal: boolean;
    closeModal: (newState: boolean) => void;
    contentContainerChild?: JSX.Element;
};

/**
 * Based on React Use Gesture package - add a bottom sheet with option to extend
 * @param openModal
 * @param closeModal
 * @param contentContainerChild - a component that will be rendered inside the container
 * @constructor
 */
export const BottomSheetModal = ({ openModal, closeModal, contentContainerChild }: BottomSheetFC): JSX.Element => {
    // Maximum height in addition to the height provided in the styles
    const maxHeight = 330;
    const dragRef = useRef<HTMLDivElement>(null);
    const [{ y }, api] = useSpring(() => ({ y: maxHeight }));
    const [isDragging, setIsDragging] = useState(false);

    const open = ({ canceled }: any) => {
        // when cancel is true, it means that the user passed the upwards threshold,
        // so we change the spring config to create a nice wobbly effect
        api.start({ y: 150, immediate: false, config: canceled ? config.wobbly : config.stiff });
    }

    const close = (velocity = 0) => {
        api.start({ y: maxHeight, immediate: false, config: { ...config.stiff, velocity } });
    }

    useEffect(() => {
        open(false);
        if (!dragRef.current) {
            return;
        }
        dragRef.current.addEventListener('mousedown', stopPropagation);
        dragRef.current.addEventListener('click', stopPropagation);

        return () => {
            if (!dragRef.current) {
                return;
            }
            dragRef.current.removeEventListener('mousedown', stopPropagation);
            dragRef.current.removeEventListener('click', stopPropagation);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openModal]);

    const bind = useDrag(
        ({
             last,
             velocity: [, vy],
             direction: [, dy],
             offset: [, oy],
             cancel,
             canceled
    }) => {
            setIsDragging(true);

            // cancel and resets to open position
            if (oy < -50) cancel();

            // when the user releases the sheet, we check whether it passed
            // the threshold for it to close, or if we reset it to its open position
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
        if (isDragging) {
            setIsDragging(false);
            return;
        }
        closeModal(false);
    };

    const stopPropagation = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const display = y.to((py) => (py < maxHeight ? 'block' : 'block'))

    return (
        <div className="flex" style={{ overflow: 'hidden' }}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openModal}
                onClick={handleClose}
                onScroll={disableScrollOnBackdrop}
            >
                <a.div className={'sticky-bottom-sheet'} style={{display, bottom: `calc(-100vh + ${maxHeight - 300}px)`, y}}  ref={dragRef} >
                    <div className={'grab-cursor text-gray-800 bottom-1 p-4'} { ...bind() } >Drag Me</div>
                    <div className={'text-gray-800 flex flex-col h-full p-6 overflow-scroll'}>
                        Container
                        { contentContainerChild ? cloneElement(contentContainerChild) : <></> }
                    </div>
                </a.div>
            </Backdrop>
        </div>
    )
}
