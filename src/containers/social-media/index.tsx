import React, {useEffect, useState} from 'react'
import { SocialMediaHeader } from "@/components/social-media-header";
import SocialMediaTabs from "@/components/social-media-tabs";
import '../../sass/_general.scss';

export const SocialMediaSection = () => {

    const [showDetail, setShowDetails] = useState<boolean>(false);

    return (
        <div className="work social-media-container">
            <h2 className={'header-title'}>Social Media<span>.</span></h2>
            <div className={`social-media-section overflow-hidden ease-in-out ${showDetail ? 'max-height' : 'min-height'}`}>
                <SocialMediaHeader/>
                <div className={'social-container'}>
                    <SocialMediaTabs/>
                </div>
            </div>
            <div className={`${!showDetail ? 'hidden-details-gradient' : ''} flex justify-center items-center absolute bottom-14 text-center`}>
                <a
                    className={`${showDetail ? 'text-gray-800' : 'text-gray-200'} text-xl font-bold cursor-pointer`}
                    onClick={(e) => {
                        e.preventDefault();
                        setShowDetails(!showDetail);
                    }}>
                    {showDetail ? 'Hide details' : 'Stalk me (Show more...)'}
                </a>
            </div>
        </div>
    );
}

