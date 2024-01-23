import React from 'react'
import '../../sass/_work.scss';
import { BlogElement } from "./blogElement";
import MachineLearning from '../../assets/images/machinelearning.svg';
import Science from '../../assets/images/datascience.svg';
import Analytics from '../../assets/images/analytics.svg';

export const BlogView = () => {
    return (
        <div className="blog-container">
            <h2 className={'header-title'}>Latest Posts<span>.</span></h2>
            <div className="blog-element-container">
                <BlogElement blogTitle={'Implement Snowplow Analytics in Azure'}
                             blogImagePath={Science}
                             blogDate={'February 20, 2020'}
                             author={'Besjon'}/>
                <BlogElement blogTitle={'Get started: Appache Kafka and Spark'}
                             blogImagePath={MachineLearning}
                             blogDate={'December 20, 2020'}
                             author={'Besjon'}/>
                <BlogElement blogTitle={'Explore Docker and Kubernetes'}
                             blogImagePath={Analytics}
                             blogDate={'March 20, 2020'}
                             author={'Besjon'}/>
            </div>
        </div>
    );
}

