import React, {useEffect, useRef, useState} from 'react'
import { SocialMediaHeader } from "@/components/social-media-header";
import SocialMediaTabs from "@/components/social-media-tabs";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { MouseEvent } from 'react';

import '../../sass/_general.scss';

export const SocialMediaSection = () => {

    // Thanks to: https://jhey.dev/ for the amazing work to the open source community

    const [showDetail, setShowDetails] = useState<boolean>(false);
    const socialMediaRef = useRef<HTMLDivElement>(null);

    const handleShowDetails = (e: MouseEvent ) => {
        e.preventDefault();
        setShowDetails(!showDetail);
        const socialMediaAnchor = socialMediaRef.current;
        if (!socialMediaAnchor) {
            return;
        }
        socialMediaAnchor.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="work social-media-container">
            <h2 className={'header-title'}>Social Media<span>.</span></h2>
            <div ref={socialMediaRef}></div>
            <div
                className={`social-media-section overflow-hidden ease-in-out ${showDetail ? 'max-height' : 'min-height'}`}>
                <SocialMediaHeader/>
                <div className={'social-container'}>
                    <SocialMediaTabs/>
                </div>
            </div>
            <div
                className={`${!showDetail ? 'hidden-details-gradient bottom-14' : 'w-full hidden-container'} flex justify-center items-center absolute text-center`}>
                <a
                    className={`${showDetail ? 'text-gray-800' : 'text-gray-200 mt-14'} text-xl font-bold cursor-pointer btn-arrow`}
                    onClick={(e) => handleShowDetails(e)}>
                    {showDetail ? 'Hide Details 😭' : 'Stalk Me 👀'} <ArrowForwardIcon className={'icon-arrow'} />
                </a>
            </div>
        </div>
    );
}

