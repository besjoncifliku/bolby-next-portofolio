import React, { useState } from 'react'
import { BottomSheetModal } from "@/components/_generics/StickyBottomModal";
import { GuestBook } from "@/components/guestbook";
import UserProfileImg from "@/assets/images/about_user_profile.png";
import Image from "next/image";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import BookIcon from '@mui/icons-material/Book';

// TODO Optimize dino game for production
import {DinoGame} from "@/components/dino-game";
import { useMediaQuery } from '@mui/material';

export const SocialMediaHeader = () => {

    const [openGuestBook, setOpenGuestBook] = useState<boolean>(false);
    const isMobile = useMediaQuery('(max-width: 599px)');

    const handleCloseGuestBook = () => {
        setOpenGuestBook(false);
    }

    return (
        <div className={'social-media-header'}>
            <div className={'social-media-hardcover'} style={isMobile ? { width: "90%", margin: "auto auto" } : {}}>
                {/*TODO Needs refactor to reduce CPU usage, clear state handling in component unmount */}
                {/*<DinoGame />*/}
            </div>
            <Image
                src={UserProfileImg}
                className='social-profile-image'
                alt='besjon-profile'
                style={isMobile ? { top: "13%", left: "4.5rem" } : {}}
            />
            <button
                className={'absolute right-1 mt-6 flex justify-center guestbook-btn cursor-pointer'}
                onClick={() => setOpenGuestBook(true)}
                style={isMobile ? { position: 'relative', margin: "85px auto 0 auto" } : {}}
            >
                <div className={'z-10'}>
                    GuestBook <BookIcon className={'guestbook-icon text-gray-50'} />
                </div>
            </button>
            <div className={'social-container'} style={isMobile ? { width: "100%" } : {}}>
                <div className={'social-profile-details mt-16'} style={isMobile ? { width: "120%", marginLeft: "-10px" } : {}}>
                    <h2 className={'text-3xl text-gray-800 font-bold mb-2'}>
                        Besjon Cifliku <span className={'text-3xl text-yellow-400 font-bold'}>⚡</span>
                    </h2>
                    <p className={'text-gray-800 font-bold text-wrap mb-2'}>
                        Programming === Painting - Bring ideas to life with a few lines of code.
                    </p>
                    <p className={'text-gray-600 text-wrap'}>
                        Software Engineer  |  ML & AI Enthusiast  |  Content Creator  |  IT Security Specialist
                    </p>
                </div>
                <div className={'social-media-icons mt-8 flex items-center justify-start'} style={isMobile ? { flexDirection: "column", alignItems: 'flex-start' } : {}}>
                    <p><CalendarMonthOutlinedIcon className={'mr-1'} /> Joined on Feb 2024</p>
                    <p><CakeOutlinedIcon className={'mr-1'}/> 24 y/o</p>
                    <p><DoneAllIcon className={'mr-1'}/> Open to Work</p>
                </div>
            </div>
            <div className={'guestbook-list'}>
                <BottomSheetModal
                    openModal={openGuestBook}
                    closeModal={handleCloseGuestBook}
                    contentContainerChild={<GuestBook />}
                />
            </div>
        </div>
    );
}

