import React from 'react'
import '../../sass/_work.scss';
import { SocialMediaHeader } from "@/components/social-media-header";
import { SocialMediaFeed } from "@/components/social-media-feed";

export const SocialMediaSection = () => {

    return (
        <div>
            <SocialMediaHeader />
            <SocialMediaFeed />
        </div>
    );
}

