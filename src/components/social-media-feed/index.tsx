import React from 'react'
import '../../sass/_general.scss';
import UserProfileImg from "@/assets/images/about_user_profile.png";
import Image from "next/image";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export const SocialAboutMeText = () => {
    return (
        <div className={''}>
            <p>I am Ironman...</p>
        </div>
    );
}

const SocialMediaDetails = () => {
    return (
        <div className={'flex items-center mb-4'}>
            <Image
                src={UserProfileImg}
                className={'social-profile-image w-12'}
                alt={'besjon-cifliku-profile'}
            />
            <div className={'flex justify-between items-center ml-2 w-full'}>
                <div className={'flex justify-between items-center'}>
                    <h3>UserName 🌟</h3>
                    <p className={'text-gray-500'}> &#x2022; date</p>
                </div>
                <div className={'bg-gray-300 rounded-3xl p-2 pr-2.5'}>
                    <p><span>🔥</span> Fire Coding</p>
                </div>
            </div>
        </div>
    );
}

const SocialMediaPost = () => {
    return (
        <div className={'social-media-post w-11/12'}>
            <div className={'flex justify-end text-gray-500 mb-2'}><PushPinOutlinedIcon /> Pinned</div>
            <SocialMediaDetails/>
            <div className={'pl-8'}>
                <h2>Title</h2>
                <p>Description....</p>
                <p>Image</p>
                <p>Location</p>
            </div>
            <div className={'flex justify-end'}>
                <p className={'mr-4'}><IosShareOutlinedIcon /></p>
                <p><FavoriteBorderOutlinedIcon /></p>
            </div>
        </div>
    );
}

export const SocialMediaFeed = () => {

    return (
        <div className={'flex justify-center mt-3'}>
            <SocialMediaPost/>
        </div>
    );
}
