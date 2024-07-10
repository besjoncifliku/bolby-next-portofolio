import React, { useContext } from 'react'
import ProfileImg from '../../assets/images/user_profile.png';
import '../../sass/_header.scss';
import { UserContent } from "../user-content";
import Image from "next/image";
import { ResponsivenessContext } from '@/contexts/breakpoint-context';

export const UserProfile = ({}) => {

    const { styles } = useContext(ResponsivenessContext);

    return (
        <div className={'header-profile'} style={styles?.headerProfile}>
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
