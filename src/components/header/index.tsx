import React from 'react'
import { useSpring, animated } from  '@react-spring/web'
import { UserProfile } from "./UserProfile";
import { SpotifyBadge } from "@/components/spotify-badge";
import '../../sass/_header.scss';

const calc = (x: number, y: number) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans4 = (x: number, y: number) => `translate3d(${-x / 16 + 55}px,${-y / 10 + 50}px,0)`;
const trans6 = (x: number, y: number) => `translate3d(${-x / 15 + 25}px,${-y / 9 - 220}px,0)`;
const trans7 = (x: number, y: number) => `translate3d(${-x / 16 + 35}px,${-y / 10 + 105}px,0)`;
const trans8 = (x: number, y: number) => `translate3d(${-x / 18 - 25}px,${-y / 8 + 10}px,0)`;
const trans9 = (x: number, y: number) => `translate3d(${-x / 15 - 25}px,${-y / 10 - 180}px,0)`;
const trans10 = (x: number, y: number) => `translate3d(${-x / 16 - 45}px,${-y / 14 + 105}px,0)`;

export const HeaderView = () => {
    const [props, set] = useSpring(() => ({xy: [0, 0], config: {mass: 20, tension: 850, friction: 120}}));
    return (
        <div className="header-container">
            <UserProfile />
            <div className="animated-container" onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}>
                <animated.div className="card4" style={{transform: props.xy.to(trans4)}}/>
                <animated.div className="card6" style={{transform: props.xy.to(trans6)}}/>
                <animated.div className="card7" style={{transform: props.xy.to(trans7)}}/>
                <animated.div className="card8" style={{transform: props.xy.to(trans8)}}/>
                <animated.div className="card9" style={{transform: props.xy.to(trans9)}}/>
                <animated.div className="card10" style={{transform: props.xy.to(trans10)}}/>
            </div>
            <SpotifyBadge />
        </div>
    );
}
