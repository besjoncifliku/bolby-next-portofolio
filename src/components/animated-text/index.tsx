import React, {useEffect, useRef, useState} from 'react'
import '../../sass/_animated.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView, animated } from '@react-spring/web'
import { buildInteractionObserverThreshold } from "@/utils/Threshold.utils";

gsap.registerPlugin(ScrollTrigger);

export const AnimatedText = () => {

    const refs: any[] = [];
    const textElements = [
        {
            text: "DEVELOP",
            hidden: "CLEAN CODE"
        },
        {
            text: "SOFTWARE",
            hidden: "ARCHITECT"
        },
        {
            text: "SOLUTIONS",
            hidden: "TECH"
        }
    ]

    const revealRefs = useRef<any>([]);
    revealRefs.current = [];

    const addToRefs = (el: any) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    const refProps = {
        from: {
            backgroundSize: '0',
        },
        to: {
            backgroundSize: '100%',
        }
    }

    const refArgs = {
        rootMargin: '75% 0px 25% 0px',
        amount: buildInteractionObserverThreshold(),
    }

    const [ref1, springs1] = useInView(() => (refProps), refArgs);
    const [ref2, springs2] = useInView(() => (refProps), refArgs);
    const [ref3, springs3] = useInView(() => (refProps), refArgs);

    const refsInView = [ref1, ref2, ref3];
    const springsInView = [springs1, springs2, springs3];

    useEffect(() => {
        /*
        TODO Fix me to use GSAP library

        const textElements = gsap.utils.toArray('.text-animated');
        console.log(revealRefs);
        revealRefs.current.
        revealRefs.current.forEach((text: any, index: number) => {
            gsap.fromTo(text, {
                backgroundSize: '0'
            }, {
                backgroundSize: '100%',
                ease: 'none',
                duration: '1',
                scrollTrigger: {
                    id: `text-animated-${index+1}`,
                    trigger: text,
                    start: 'top center+=100', // 'top center 80%',
                    end: 'top center 20%',
                    scrub: true,
                    toggleActions: 'play none none reverse'
                }
            });
        });
        // if use, change ref={ref} accordingly
        // add this to the ref -> ref={addToRefs}
        */
    }, []);

    return (
        <div className="container-animated-text">
            {textElements.map((textElement, index) => (
                    <animated.h1 key={index} className={'text-animated'} ref={refsInView[index]} style={springsInView[index]}>
                        {textElement.text}
                        <span>{textElement.hidden}</span>
                    </animated.h1>
                )
            )}
        </div>
    );
}