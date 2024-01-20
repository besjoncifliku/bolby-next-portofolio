import React from 'react'
import headerProfile from '../../assets/images/user_profile.png';
import '../../sass/headerStyle.scss';
import { UserContent } from "./userContent";
import Image from "next/image";

export const UserProfile = ({}) => {
    return (
        <div className="header-profile">
            <Image
                src={headerProfile}
                alt={'header-profile'}
                className='user-profile'
            />
            <UserContent />
        </div>
    );
}
