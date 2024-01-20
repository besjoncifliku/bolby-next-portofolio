import React from 'react'
import '../../sass/_work.scss';
import {InterestElement} from "./interestElement";
import MachineLearning from '../../assets/images/machinelearning.svg';
import Science from '../../assets/images/datascience.svg';
import Analytics from '../../assets/images/analytics.svg';

export const InterestView = () => {
    return (
            <div className="interest-container">
                <h2 className={'header-title'}>Research Interest<span>.</span></h2>
                <div className="interest-element-container">
                    <InterestElement interestTitle={'Data Science'}
                                     interestDescription={'Clear data and a feature analysis'}
                                     interestImagePath={Science}
                                     position={'side-pos'}/>
                    <InterestElement interestTitle={'Machine Learning'}
                                     interestDescription={'Mining data and playing around with new algorithms'}
                                     interestImagePath={MachineLearning}
                                     position={'center-pos'} />
                    <InterestElement interestTitle={'Business Analytics'}
                                     interestDescription={'Data analysis to help your business grow'}
                                     interestImagePath={Analytics}
                                     position={'side-pos'}/>
                </div>
            </div>
    );
}

