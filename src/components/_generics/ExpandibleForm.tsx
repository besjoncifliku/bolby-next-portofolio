import React, { cloneElement, type JSX } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type ExpandibleFormFC = {
    formControls: any;
};

/**
 * A form that opens and closes based (like a drop-down structure)
 * @param formControls
 * @constructor
 */
export const ExpandibleForm = ({ formControls }: ExpandibleFormFC): JSX.Element => {
    return (
        <div className="flex" style={{ overflow: 'hidden' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={ <ExpandMoreIcon /> }
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    GuestBook Form
                </AccordionSummary>
                <AccordionDetails>
                    { cloneElement(formControls) }
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
