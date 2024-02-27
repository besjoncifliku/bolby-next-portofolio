import React from 'react'
import { HeroSection } from "@/containers/hero-section";
import { AboutView } from "@/components/about";
import { WorkView } from "@/components/work";
import { InterestView } from "@/components/interests";
import { BlogView } from "@/components/blog";
import { ContactView } from "@/components/contact";
import { AnimatedText } from "@/components/animated-text";
import '../../sass/_style.scss';
import {SocialMediaSection} from "@/containers/social-media";

export const Content = () => {
    return (
        <div className="sm:ml-64 content-container">
            <HeroSection />
            <div className="content-container-limited-width">
                <AboutView/>
                <InterestView />
                <WorkView />
                <SocialMediaSection />
                <AnimatedText />
                <BlogView />
                <ContactView />
            </div>
        </div>
    );
}
