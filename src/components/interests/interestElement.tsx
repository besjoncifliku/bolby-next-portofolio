import React from 'react'
import '../../sass/_work.scss';
import headerProfile from "@/assets/images/user_profile.png";
import Image from "next/image";

export const InterestElement = (props: { interestTitle: any; interestDescription: any; position: any; interestImagePath: any; }) => {
    const title = props.interestTitle;
    const text = props.interestDescription;
    const position = props.position;
    const image = props.interestImagePath;

    return (
        <div className={`interest-element 
                        rounded shadow-dark 
                        padding-30 
                        ${position}`}>
            {position === 'center-pos' ? <span>Just do it 💻</span> : ""}
            <Image
                src={image}
                alt={'Image'}
                className='user-profile'
            />
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="/#" className="button">Get Started</a>
        </div>
    );
}

