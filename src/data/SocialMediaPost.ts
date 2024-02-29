import SocialPost1 from '../assets/images/social_media1.jpg';
import SocialPost3 from '../assets/images/social_media3.jpg';
import SocialPost4 from '../assets/images/social_media4.jpg';

export const SOCIAL_MEDIA_POSTS: any = [
    {
        id: 1,
        title: 'Welcome Amazing Human!',
        description: 'I am happy you visited me today. Welcome to my portfolio website. ' +
            'Here I\'ve showcased a few works I\'ve built over the years. ' +
            'I decided to implement some amazing designs I have seen around the web in NextJS ' +
            'so I can harness my programming skills. ' +
            '<span className={`italic`}>I tried to reference everything, so you can check out the original works.</span>',
        image: SocialPost1,
        location: 'Germany',
        pinned: true,
        badge: '<span>🔥</span> Fire Coding',
        date: '2024-02-29'
    },
    {
        id: 2,
        title: 'Web Dev - Rabbit Hole',
        description: 'Is web going crazy right now? Cloud computing, k8s, ansible, prometheus, and many more tools that complicate' +
            'your life and make web fun! Simbaa, everything that light touches is part of your job description.',
        image: SocialPost3,
        location: '',
        pinned: false,
        badge: '<span>🐰</span> Fresh',
        date: '2024-01-23'
    },
    {
        id: 3,
        title: 'Would AI replace your job?',
        description: 'I believe AI can be a great assistant to engineers. ' +
            'People still need the empathy, design ideas and functional understanding of the system that a software engineer offers.',
        image: SocialPost4,
        location: '',
        pinned: false,
        badge: '<span>🎮</span> Gaming',
        date: '2023-11-12'
    }
];