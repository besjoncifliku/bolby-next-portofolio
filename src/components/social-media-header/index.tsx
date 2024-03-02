import React from 'react'
import '../../sass/_general.scss';
import UserProfileImg from "@/assets/images/about_user_profile.png";
import Image from "next/image";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import {DinoGame} from "@/components/dino-game";

export const SocialMediaHeader = () => {

    return (
        <div className={'social-media-header'}>
            <div className={'social-media-hardcover'}>
                <DinoGame />
            </div>
            <Image
                src={UserProfileImg}
                className='social-profile-image'
                alt='besjon-profile'
            />
            <a className={'text-black absolute right-14 mt-6'}>Follow more</a>
            <div className={'social-container'}>
                <div className={'social-profile-details mt-14'}>
                    <h2 className={'text-3xl text-gray-800 font-bold mb-2'}>Besjon Cifliku <span className={'text-3xl text-yellow-400 font-bold'}>⚡</span></h2>
                    <p className={'text-gray-800 font-bold text-wrap mb-2'}>Programming === Painting - Bring ideas to life with a few lines of code.</p>
                    <p className={'text-gray-600 text-wrap'}>Software Engineer  |  ML Engineer  |  AI Enthusiast  |  Content Creator  |  IT Security Specialist </p>
                </div>
                <div className={'social-media-icons mt-8 flex items-center justify-start'}>
                    <p><CalendarMonthOutlinedIcon className={'mr-1'} /> Joined on Feb 2024</p>
                    <p><CakeOutlinedIcon className={'mr-1'}/> 24 y/o</p>
                    <p><DoneAllIcon className={'mr-1'}/> Open to Work</p>
                </div>
            </div>
        </div>
    );
}

