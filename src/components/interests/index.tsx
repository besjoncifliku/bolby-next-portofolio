import React from 'react'
import '../../sass/_work.scss';
import {InterestElement} from "./interestElement";
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

    return (
        <animated.div className="interest-container" ref={ref} style={springs}>
            <h2 className={'header-title'}>Research Interests<span>.</span></h2>
            <div className="interest-element-container">
                <InterestElement interestTitle={'Data Science'}
                                 interestDescription={'Data cleaning and a feature analysis. Building AI Chat bots using NLP, LLMs, Embeddings.'}
                                 interestImagePath={Science}
                                 position={'side-pos'}/>
                <InterestElement interestTitle={'Software Engineering & Architecture'}
                                 interestDescription={'Clean code developer, software design patterns and more...'}
                                 interestImagePath={MachineLearning}
                                 position={'center-pos'}/>
                <InterestElement interestTitle={'Machine Learning'}
                                 interestDescription={'Mining data and playing around with new released deep learning algorithms!'}
                                 interestImagePath={Analytics}
                                 position={'side-pos'}/>
            </div>
            <div className={'contact-me'}>
                <p>Looking for a custom job. Please, <a className={'contact-link'} href={'#contact-section'}>contact
                    me!</a> 👋</p>
            </div>
        </animated.div>
    );
}

