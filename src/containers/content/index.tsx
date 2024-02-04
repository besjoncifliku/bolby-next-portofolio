import React from 'react'
import { HeaderView } from "@/components/header";
import { AboutView } from "@/components/about";
import { WorkView } from "@/components/work";
import { InterestView } from "@/components/interests";
import { BlogView } from "@/components/blog";
import { ContactView } from "@/components/contact";
import { AnimatedText } from "@/components/animated-text";
import '../../sass/_style.scss';

export const Content = () => {
    return (
        <div className="sm:ml-64 content-container">
            <HeaderView/>
            <div className="content-container-limited-width">
                <AboutView/>
                <InterestView />
                <WorkView />
                <AnimatedText />
                <BlogView />
                <ContactView />
            </div>
        </div>
    );
}
