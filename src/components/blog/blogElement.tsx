import React from 'react'
import Image from 'next/image'
import '../../sass/_work.scss';

export const BlogElement = (props: any) => {
    const title = props.blogTitle;
    const author = props.author;
    const image = props.blogImagePath;
    const date = props.blogDate;

    return (
        <div className={`blog-element 
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

