import React from 'react'
import '../../sass/_style.scss';
import {HeaderView} from "@/components/header";
import {AboutView} from "@/components/about";
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
                <InterestView />
                <WorkView />
                <BlogView />
                <ContactView />
            </div>
        </div>
    );
}
