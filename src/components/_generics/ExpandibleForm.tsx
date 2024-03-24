import React, {cloneElement, type JSX, useEffect, useRef} from 'react';
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
    const expandRef = useRef<HTMLDivElement>(null);
    const [expand, setExpand] = React.useState(false);

    const handleClick = () => {
        console.log('hello');
        setExpand((prev) => !prev);
    }

    useEffect(() => {
        if (!expandRef.current) {
            return;
        }
        expandRef.current.addEventListener('click', handleClick);

        return () => {
            if (!expandRef.current) {
                return;
            }
            expandRef.current.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div>
            <p>Test:</p>
            <Accordion expanded={expand} >
                <AccordionSummary
                    expandIcon={ <ExpandMoreIcon /> }
                    aria-controls="expandible-forms"
                    ref={expandRef}
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
