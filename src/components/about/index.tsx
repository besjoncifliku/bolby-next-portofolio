import React from 'react'
import Image from 'next/image'
import CountUp from 'react-countup';
import '../../sass/_about.scss';
import { AboutText } from "./aboutText";
import UserProfileImg from '../../assets/images/about_user_profile.png';
import CoffeeIcon from '@mui/icons-material/Coffee';

export const AboutView = () => {
    return (
        <div className="about-me">
            <h2 className={'header-title'}>About Me<span>.</span></h2>
            <div className={'about-section'}>
                <div className={'about-profile'}>
                    <div className={'about-profile-image'}>
                        <Image
                            src={UserProfileImg}
                            className='profile-image'
                            alt='besjon-profile'
                        />
                    </div>
                    <div className={'icon-section'}>
                        <div className={'icon flex-col'}>
                            <CoffeeIcon className={'text-gray-500 text-8xl'}/>
                            <h1 className={'text-2xl mt-1 text-gray-500 font-bold'}><CountUp end={12345} /></h1>
                        </div>
                        <h2 className={'mt-0 text-gray-400 font-sans'}>Cups of Coffee</h2>
                    </div>
                </div>
                <AboutText />
            </div>
        </div>
    );
}
