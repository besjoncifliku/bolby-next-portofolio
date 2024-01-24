import React from 'react'
import '../../sass/_about.scss';

export const AboutText = () => {
    // @ts-ignore
    return (
        <div className="about-text shadow-dark">
            <div className={'paragraph'}>
                <p>I am Besjon. An engineer with passion to develop amazing software and write clean code. I like to play around with AI and develop games as well.
                </p>
                <a href={'#download'} className={'button'}>Open CV-Editor</a>
            </div>
            <div className={'about-skills'}>
                <div className={'skill-element'}>
                    <div className={'skill-title'}>
                        <h3>Software Engineering & Architecture</h3><span>95 %</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div
                            className="bg-yellow-400 h-2.5 rounded-full"
                            style={{width: "95%"}}
                        >
                        </div>
                    </div>
                </div>
                <div className={'skill-element'}>
                    <div className={'skill-title'}>
                        <h3>Security</h3><span>98 %</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{width: "98%"}}></div>
                    </div>
                </div>
                <div className={'skill-element'}>
                    <div className={'skill-title'}>
                        <h3>Automation & Testing</h3><span>90 %</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500" style={{width: "90%"}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
