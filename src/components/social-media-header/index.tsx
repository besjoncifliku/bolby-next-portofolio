import React from 'react'
import '../../sass/_general.scss';
import UserProfileImg from "@/assets/images/about_user_profile.png";
import Image from "next/image";

export const SocialMediaHeader = () => {

    return (
        <div className={'social-media-header'}>
            <div className={'social-media-hardcover'}>
                <p className={'text-white'}>Hello there...</p>
            </div>
            <Image
                src={UserProfileImg}
                className='social-profile-image'
                alt='besjon-profile'
            />
            <a className={'text-black'}>Follow more</a>
            <div className={'social-container'}>
                <div className={'social-profile-details'}>
                    <h2 className={'text-2xl text-gray-800 font-bold mb-2'}>Besjon Cifliku emj</h2>
                    <p className={'text-gray-800 font-bold text-wrap mb-2'}>Programming is like painting, it brings ideas to life with a few lines of code.</p>
                    <p className={'text-gray-600 text-wrap'}>Software Engineer  |  ML Engineer  |  AI Enthusiast  |  Content Creator  |  IT Security Specialist </p>
                </div>
            </div>
        </div>
    );
}

