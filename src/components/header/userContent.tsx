import React from 'react'
import '../../sass/_header.scss';
import Typewriter from 'typewriter-effect';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';

export const UserContent = () => {
    return (
        <div className="user-content">
            <h2>Besjon</h2>
            <div className='type-writer'>
                <Typewriter
                    options={{
                        strings: ["Looking for an 🤓💻 Engineer?", "I ❤️ programming #️<{}!"],
                        autoStart: true,
                        loop: true,
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString('Hello World 👋😄!')
                            .pauseFor(1500)
                            .deleteAll()
                            .start();
                    }}
                />
            </div>
            <div className='social-icons'>
                <GitHubIcon className='fab'/>
                <LinkedInIcon className='fab' />
                <TerminalIcon className='fab'/>
            </div>
            <button className={'hack-me'}>{' > '}hackMyResume() <TerminalIcon /> </button>
            <div className='scroll-me'>
                <a href="#thanks"><span></span>Scroll Me</a>
            </div>
        </div>
    );
}
