import React, {useEffect, useState} from 'react'
import { SocialMediaHeader } from "@/components/social-media-header";
import SocialMediaTabs from "@/components/social-media-tabs";
import '../../sass/_general.scss';

export const SocialMediaSection = () => {

    const [showDetail, setShowDetails] = useState<boolean>(false);

    return (
        <div className="work social-media-container">
            <h2 className={'header-title'}>Social Media<span>.</span></h2>
            <div className={`social-media-section overflow-hidden ease-in-out ${showDetail ? 'max-h-full' : 'max-h-80'}`}>
                <SocialMediaHeader/>
                <div className={'social-container'}>
                    <SocialMediaTabs/>
                </div>
            </div>
            <div className={'w-full h-80 absolute bottom-0'}>
                <a
                    href={'#'}
                    className={'text-gray-800 font-bold'}
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

