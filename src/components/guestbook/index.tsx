import React, { useState } from 'react';
import type { JSX } from 'react';
import { ExpandibleForm } from '../_generics/ExpandibleForm';
import { GuestReviewForm } from './GuestReviewForm';
import Image from "next/image";

type GuestBookFC = {
    guestsReviews: any;
    children?: any
};

const GuestReviewElement = (guestDetails: any) => {
    return (
        <div className={'flex items-start bottom-1 mb-4'}>
            <Image src={'# w-8 h-8'} alt={'Avatar Image'} />
            <div className={'flex flex-col items-center justify-between'}>
                <h2 className={'text-gray-800 text-2xl'}>{guestDetails.name}</h2>
                <p className={'text-gray-800 text-lg'}>{guestDetails.message}</p>
            </div>
        </div>
    );
}

/**
 *
 * @param guestsReviews
 * @constructor
 */
const GuestBookList = ({guestsReviews}: GuestBookFC) => {
    return (
        <div className={'block'}>
            {guestsReviews.map((review: any) => (
                <GuestReviewElement key={review.id} {...review} />
            ))}
        </div>
    );
}

/**
 * Guestbook where users can post their reviews from the site and I show them
 */
export const GuestBook = (): JSX.Element => {
    const [guestReviews, setGuestReviews] = useState<any>([]);

    return (
        <div className="flex flex-col">
            <p>Add your comment here and I will post it later. Thanks a lot for your feedback!</p>
            <ExpandibleForm  formControls={<GuestReviewForm />} />
            <GuestBookList guestsReviews={guestReviews} />
        </div>
    )
}
