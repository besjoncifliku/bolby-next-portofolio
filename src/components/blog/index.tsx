import React, { useContext } from 'react'
import '../../sass/_general.scss';
import MachineLearning from '../../assets/images/machinelearning.svg';
import Science from '../../assets/images/datascience.svg';
import Analytics from '../../assets/images/analytics.svg';
import Image from "next/image";
import { ResponsivenessContext } from '@/contexts/breakpoint-context';

const BlogElement = (props: any) => {
    const title = props.blogTitle;
    const author = props.author;
    const image = props.blogImagePath;
    const date = props.blogDate;
    const style = props.style

    return (
        <div style={style} className={`blog-element 
                        rounded shadow-dark 
                        padding-30`}>
            <div className={'blog-image'}>
                <Image
                    src={image}
                    alt={'Blog Image'}
                />
            </div>
            <div className={'blog-description shadow-dark'}>
                <h2>{title}</h2>
                <div className={'blog-date'}>
                    <p className={'datum'}>{date}</p>
                    <p className={'author'}>{author}</p>
                </div>
            </div>
        </div>
    );
}

export const BlogView = () => {
    const { styles } = useContext(ResponsivenessContext);
    return (
        <div className="blog-container" style={styles?.generalContainer} id='Blog'>
            <h2 className={'header-title'}>Latest Posts<span>.</span></h2>
            <div className="blog-element-container" style={styles?.blogElementContainer}>
                <BlogElement blogTitle={'Implement Snowplow Analytics in Azure'}
                             blogImagePath={Science}
                             blogDate={'February 20, 2020'}
                             author={'Besjon'}
                             style={styles?.elementStyle}/>
                <BlogElement blogTitle={'Get started: Appache Kafka and Spark'}
                             blogImagePath={MachineLearning}
                             blogDate={'December 20, 2020'}
                             author={'Besjon'}
                             style={styles?.elementStyle}/>
                <BlogElement blogTitle={'Explore Docker and Kubernetes'}
                             blogImagePath={Analytics}
                             blogDate={'March 20, 2020'}
                             author={'Besjon'}
                             style={styles?.elementStyle}/>
            </div>
        </div>
    );
}

