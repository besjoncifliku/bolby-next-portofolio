import React from 'react'
import '../../sass/_service.scss';
import Design from '../../assets/images/sketch.svg';
import Code from '../../assets/images/coding.svg';
import Test from '../../assets/images/test.svg';
import Image from "next/image";


export const ServiceView = () => {
    return (
        <div className="service">
            <h2 className={'header-title'}>Service<span>.</span></h2>
            <div className={'service-section'}>
                <div className={'service-element padding-30 rounded blue'}>
                    <div className={'service-icon'}>
                        <Image
                            src={Design}
                            alt={'Design'}
                        />
                    </div>
                    <div className={'service-title'}>
                        <h3>Design</h3>
                    </div>
                    <div className={'service-info'}>
                        Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.
                    </div>
                </div>
                <div className={'service-element padding-30 rounded yellow'}>
                    <div className={'service-icon'}>
                        <Image
                            src={Code}
                            alt={'Development'}
                        />
                    </div>
                    <div className={'service-title'}>
                        <h3>Development</h3>
                    </div>
                    <div className={'service-info'}>
                        Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.
                    </div>
                </div>
                <div className={'service-element padding-30 rounded red'}>
                    <div className={'service-icon'}>
                        <Image
                            src={Test}
                            alt={'Automation & Testing'}
                        />
                    </div>
                    <div className={'service-title'}>
                        <h3>Automation & Testing</h3>
                    </div>
                    <div className={'service-info'}>
                        Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.
                    </div>
                </div>
            </div>
            <div className={'contact-me'}>
                <p>Looking for a custom job. Please, <a className={'contact-link'} href={'#contact-section'}>contact me!</a> 👋</p>
            </div>
        </div>
    );
}
