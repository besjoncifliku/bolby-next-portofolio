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
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={ <ExpandMoreIcon /> }
                    aria-controls="expandible-forms"
                >
                    GuestBook Form
                </AccordionSummary>
                <AccordionDetails>
                    <div className={'text-gray-800'}>
                        Test me
                    </div>
                    { formControls
                        ? cloneElement(formControls)
                        : <p className={'text-gray-800 text-sm text-center'}>Sorry, cannot load the form!</p>
                    }
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
