import React from 'react'
import '../../sass/_style.scss';
import {HeaderView} from "@/components/header";
import {AboutView} from "@/components/about";
import {ServiceView} from "@/components/services";
import {ExperienceView} from "@/components/experience";
import {WorkView} from "@/components/work";
import {InterestView} from "@/components/interests";
import {BlogView} from "@/components/blog";
import {ContactView} from "@/components/contact";

export const Content = () => {
    return (
        <div className="sm:ml-64 content-container">
            <HeaderView/>
            <div className="content-container-limited-width">
                <AboutView/>
                <ServiceView/>
                <ExperienceView />
                <WorkView />
                <InterestView />
                <BlogView />
                <ContactView />
            </div>
        </div>
    );
}
