import React from 'react'
import Image from 'next/image'
import CountUp from 'react-countup';
import '../../sass/_about.scss';
import { AboutText } from "./AboutText";
import UserProfileImg from '../../assets/images/about_user_profile.png';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { useInView, animated } from '@react-spring/web'
import { buildInteractionObserverThreshold } from "@/utils/Threshold.utils";

export const AboutView = () => {

    const [ref, springs] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 180,
            },
            to: {
                opacity: 1,
                y: 0,
            }
        }),
        {
            rootMargin: '10% 0px 2% 0px',
            amount: buildInteractionObserverThreshold(),
        }
    );

    return (
        <animated.div className="about-me" ref={ref} style={springs}>
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
                            <CoffeeIcon className={'text-gray-300 text-8xl'}/>
                            <h1 className={'text-2xl mt-1 text-gray-500 font-bold'}><CountUp end={12345} /></h1>
                        </div>
                        <h2 className={'mt-0 text-gray-400 font-sans'}>Cups of Coffee</h2>
                    </div>
                </div>
                <AboutText />
            </div>
        </animated.div>
    );
}
