import React, { useEffect, useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { a, useSpring, config } from '@react-spring/web';
import type { JSX } from 'react';
import Backdrop from '@mui/material/Backdrop';
import styles from './styles.module.css';

type ExpandibleFormFC = {
    formControls: any;
    children?: any
};

/**
 * A form that opens and closes based (like a drop-down structure)
 * @param formControls
 * @constructor
 */
export const ExpandibleForm = ({ formControls }: ExpandibleFormFC): JSX.Element => {
    return (
        <div className="flex" style={{ overflow: 'hidden' }}>
            <h2>This is a form</h2>
        </div>
    )
}
