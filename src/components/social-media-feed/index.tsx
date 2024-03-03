import React from 'react'
import '../../sass/_general.scss';
import UserProfileImg from "@/assets/images/about_user_profile.png";
import Image from "next/image";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {SOCIAL_MEDIA_POSTS} from "@/data/SocialMediaPost";

export const SocialAboutMeText = () => {
    return (
        <div className={'text-gray-500 mt-6'}>
            <h2 className={'text-2xl font-bold'}>Helloouu there 👋, </h2>
            <p className={'text-lg mt-4 mb-4'}>
                Well, I guess you already know my name now 👀.<br></br> I like to code 💻 and build awesome tools.
            </p>
            <p className={'text-lg mt-4 mb-4'}>I cannot say I am a great designer 🎨
                as this page is based on designs from other people.
                I am more focused on efficiency, data handling and accessibility of the systems.
                However, that is what I like about software development and the open source community.
                I like to see what UI/UX designers are doing and try to implement them in Javascript, React or Angular code.
                Everything you can see and imagine, can be built with a few lines of code.
            </p>
            <p className={'text-lg mt-4 mb-4'}>
                I have studied about Computer Science where I{`'`}ve deepen my knowledge in IT Security, Machine Learning 🤖 and AI.
                Now, I am pursuing a doctorate degree in AI 🦾. My goal is to make AI more accessible,
                explainable and more trustworthy so everyone can use it without concerns about data privacy.
            </p>
            <p className={'text-lg mt-4 mb-4'}>
                I like public speaking although I am a bit shy. I like team work and can bring many innovative
                ideas to the table. I have an eye-catching about system bugs 🐞.
                My peers would say that I am too quick with providing creative solution before the deadline in a very good quality.
                Unfortunately I like the perfection and perfectionism usually kills the good.
            </p>
            <p className={'text-lg mt-4 mb-4'}>
                I believe an important part of engineering is not the code, but the approach you decide to solve the problem.
                Everyone knows how to code. It is so easy to learn programming, online bootcamp, StackOverflow or Chat-GPT can
                teach you to code. However I think a good engineer knows the ins and outs to the craft.
            </p>
            <p className={'text-lg mt-4 mb-4'}>
                A great engineer should know the trade offs of the system and should be committed to the continuous
                journey of self-improvement and learning. <br></br>
                <span className={'italic'}> Feedback is always appreciated. Leave a comment in the Guestbook above.</span>
            </p>
            <p className={'text-lg mb-6'}>Do not forget to have fun!! 😜</p>
            <p className={'text-lg text-right w-full'}>Made with ❤️ - Besjon</p>
        </div>
    );
}

const SocialMediaDetails = (post: any) => {
    return (
        <div className={'flex items-center mb-4'}>
            <Image
                src={UserProfileImg}
                className={'social-profile-image w-12'}
                alt={'besjon-cifliku-profile'}
            />
            <div className={'flex justify-between items-center ml-2 w-full'}>
                <div className={'flex justify-between items-center'}>
                    <h3 className={'font-bold mr-3'}>besjoncifliku 🌟</h3>
                    <p className={'text-gray-300 flex items-center'}>&#x2022;  {post.date}</p>
                </div>
                <div className={'bg-gray-300 rounded-3xl p-2 pr-3'}>
                    <p dangerouslySetInnerHTML={{ __html: post.badge }}></p>
                </div>
            </div>
        </div>
    );
}

const SocialMediaPost = (post: any) => {
    return (
        <div className={'social-media-post mb-12'}>
            {post.pinned && <div className={'flex justify-end text-gray-300 mb-2'}>
                <PushPinOutlinedIcon/>
                Pinned by <span className={'text-gray-300 font-bold ml-2'}> @</span><span
                className={'text-gray-300 underline font-bold'}>bcifliku</span>
            </div>}
            <SocialMediaDetails {...post} />
            <div className={'pl-14'}>
                <h2 className={'text-2xl font-bold mb-3'}>{post.title}</h2>
                <p className={'text-lg mb-2'} dangerouslySetInnerHTML={{ __html: post.description }}></p>
                <Image className={'w-full h-96 mt-3 mb-1 rounded-lg object-cover'} src={post.image} alt={'Image'}/>
                {post.location ?
                    <p className={'flex items-center text-xs text-gray-400'}>
                        <LocationOnIcon className={'mr-1'}/> Germany</p> : <p className={'mb-6'}></p>
                }
            </div>
            <div className={'flex justify-end'}>
                <p className={'mr-4'}><IosShareOutlinedIcon/></p>
                <p><FavoriteBorderOutlinedIcon/></p>
            </div>
        </div>
    );
}

export const SocialMediaFeed = () => {

    return (
        <div className={'flex flex-col justify-center mt-3'}>
            {SOCIAL_MEDIA_POSTS.map((post: any) => (
                <SocialMediaPost key={post.id} {...post} />
            ))}
        </div>
    );
}
