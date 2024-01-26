import React from 'react';
import '../../sass/_experience.scss';

export default function Experience(props: any) {
    return (
        <div className={'experience-element'}>
            <div className={'experience-timeline'}>
                {props.data.timeline}
            </div>
            <div className={'experience-title'}>
                <h2>{props.data.title}</h2>
            </div>
            <div className={`'experience-description' ${props.data.display ? "last" : ""}`}>
                <p>{props.data.description}</p>
            </div>
        </div>
    );
}