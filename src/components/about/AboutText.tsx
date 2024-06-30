import React from 'react'
import { useMediaQuery } from '@mui/material';
import '../../sass/_about.scss';

export const AboutText = () => {

    const isMobile = useMediaQuery('(max-width: 599px)');
    const mobileStyles:React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        width: "100%"
    }

    const skillsSection = [
        {
            title: 'Software Engineering & Architecture',
            percentage: '95%',
            subscription: '95 %',
            colorClass: 'bg-yellow-400'
        },
        {
            title: 'Security',
            percentage: '98%',
            subscription: '98 %',
            colorClass: 'bg-green-600'
        },
        {
            title: 'Automation & Testing',
            percentage: '90%',
            subscription: '90 %',
            colorClass: 'bg-red-600'
        }
    ];

    return (
        <div className="about-text shadow-dark" style={ isMobile ? mobileStyles : {}}>
            <div className={'paragraph'} style={ isMobile ? {width: '100%'} : {}}>
                <p>
                    I am Besjon, an engineer with passion to develop amazing software and write clean code.
                    I like to play around with AI and develop games as well.
                </p>
                <a href={'#download'} className={'button'}>Open CV_Skills-Editor</a>
            </div>
            <div className={'about-skills'} style={ isMobile ? {width: '100%', marginTop: '20px', marginLeft: '0px'} : {}}>
                {skillsSection.map((skill) => (
                    <div className={'skill-element'} key={skill.title}>
                        <div className={'skill-title'}>
                            <h3>{skill.title}</h3><span>{skill.subscription}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                            <div
                                className={`${skill.colorClass} h-2.5 rounded-full`}
                                style={{width: skill.percentage}}
                            >
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
