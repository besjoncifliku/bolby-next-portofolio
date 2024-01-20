import React from 'react'
import '../../sass/headerStyle.scss';
import Typewriter from 'typewriter-effect';
import Scroll from "../../assets/images/scroll.gif";
import Image from "next/image";

export const UserContent = () => {
    return (
        <div className="user-content">
            <h2>Besjon</h2>
            <div className='type-writer'>
                <Typewriter
                    options={{
                        strings: ["I'm a Full-Stack Developer.", "I'm a Computer Engineer."],
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Hello, nice to meet you!')
                            .pauseFor(1500)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
            <div className='social-icons'>
                <i className="fab fa-github"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-hackerrank"></i>
            </div>
            <div className="button hire-me">
                <a href='#click'>Hire me!</a>
            </div>
            <div className='scroll-me'>
                <h2 className={'scroll-me-header'}>Scroll Me</h2>
                <a href={'#scroll'}>
                    <Image
                        src={Scroll}
                        className='scroll-me-image'
                        alt='scroll-me'
                    />
                </a>
            </div>
        </div>
    );
}
