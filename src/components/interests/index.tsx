import React from 'react'
import '../../sass/_work.scss';
import {InterestElement} from "./InterestElement";
import MachineLearning from '../../assets/images/machinelearning.svg';
import Science from '../../assets/images/datascience.svg';
import Analytics from '../../assets/images/analytics.svg';
import { useInView, animated } from '@react-spring/web'
import { buildInteractionObserverThreshold } from "@/utils/threshold.utils";

export const InterestView = () => {

    const [ref, springs] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 180,
            },
            to: {
                opacity: 1,
                y: 0,
            }
        }),
        {
            rootMargin: '10% 0px 2% 0px',
            amount: buildInteractionObserverThreshold(),
        }
    );

    const researchInterest = [
        {
            title: 'Data Science',
            description: 'Data cleaning and feature analysis. Building AI Chat bots using NLP, LLMs, Embeddings.',
            position: 'side-pos',
            icon: Science
        },
        {
            title: 'Software Engineering & Architecture',
            description: 'Clean code developer, software design patterns and more...',
            position: 'center-pos',
            icon: MachineLearning
        },
        {
            title: 'Machine Learning',
            description: 'Mining data and playing around with recently released deep learning techniques!',
            position: 'side-pos',
            icon: Analytics
        }
    ];

    return (
        <animated.div className="interest-container" ref={ref} style={springs}>
            <h2 className={'header-title'}>Research Interests<span>.</span></h2>
            <div className="interest-element-container">
                {researchInterest.map((interest) => (
                    <InterestElement
                        interestTitle={interest.title}
                        interestDescription={interest.description}
                        interestImagePath={interest.icon}
                        position={interest.position}
                        key={interest.title}
                    />
                ))}
            </div>
            <div className={'contact-me'}>
                <p>Looking for a custom job. Please, <a className={'contact-link'} href={'#contact-section'}>contact
                    me!</a> 👋</p>
            </div>
        </animated.div>
    );
}

