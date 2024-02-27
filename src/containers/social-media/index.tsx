import React from 'react'
import '../../sass/_general.scss';
import { SocialMediaHeader } from "@/components/social-media-header";
import { SocialMediaFeed } from "@/components/social-media-feed";
import SocialMediaTabs from "@/components/social-media-tabs";

export const SocialMediaSection = () => {

    return (
        <div className="work">
            <h2 className={'header-title'}>Social Media<span>.</span></h2>
            <div className={'social-media-section'}>
                <SocialMediaHeader/>
                <div className={'social-container'}>
                    <SocialMediaTabs/>
                </div>
            </div>
        </div>
    );
}

