import React from 'react'
import { useMediaQuery } from '@mui/material';
import ProfileImg from '../../assets/images/user_profile.png';
import '../../sass/_header.scss';
import { UserContent } from "../user-content";
import Image from "next/image";

export const UserProfile = ({}) => {

    const isMobile = useMediaQuery('(max-width: 599px)');
    const mobileStyles = {
        left: '10%'
    }

    return (
        <div className={'header-profile'} style={isMobile ? mobileStyles : {}}>
            <div className={'glitch flex justify-center relative'}>
                <Image
                    src={ProfileImg}
                    alt={'header-profile'}
                    className='user-profile'
                />
                <div className="glitch__layers">
                    <div className="glitch__layer"></div>
                    <div className="glitch__layer"></div>
                    <div className="glitch__layer"></div>
                </div>
            </div>
            <UserContent />
        </div>
    );
}
