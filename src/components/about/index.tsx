import React from 'react'
import Image from 'next/image'
import CountUp from 'react-countup';
import '../../sass/_about.scss';
import { AboutText } from "./aboutText";

export const AboutView = () => {
    return (
        <div className="about-me">
            <h2 className={'header-title'}>About Me<span>.</span></h2>
            <div className={'about-section'}>
                <div className={'about-profile'}>
                    <div className={'about-profile-image'}>
                        <Image
                            src='../../assets/images/about_user_profile.png'
                            width={500}
                            height={500}
                            className='profile-image'
                            alt='besjon-profile'
                        />
                    </div>
                    <div className={'icon-section'}>
                        <div className={'icon'}>
                            <i className="fas fa-coffee"></i>
                            <h1><CountUp end={1234} /></h1>
                        </div>
                        <h3>Cups of Coffe</h3>
                    </div>
                </div>
                <AboutText />
            </div>
        </div>
    );
}
