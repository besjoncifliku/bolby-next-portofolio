import React, { useEffect, useState } from 'react';
import type { JSX } from 'react';
import { ExpandibleForm } from '../_generics/ExpandibleForm';

type GuestBookFC = {
    guestsReviews: any;
    children?: any
};

const GuestReviewElement = () => {
    return (<></>);
}

/**
 *
 * @param guestsReviews
 * @constructor
 */
const GuestBookList = ({guestsReviews}: GuestBookFC) => {
    return (<></>);
}

/**
 * Guestbook where users can post their reviews from the site and I show them
 */
export const GuestBook = (): JSX.Element => {
    const [guestReviews, setGuestReviews] = useState<any>([]);

    return (
        <div className="flex" style={{ overflow: 'hidden' }}>
            <h2>This are my reviewers </h2>
            <p>Add your comment here so I can post it. Thank you for your feedback!</p>
            <ExpandibleForm  formControls={[]}/>
            <GuestBookList guestsReviews={guestReviews} />
        </div>
    )
}
