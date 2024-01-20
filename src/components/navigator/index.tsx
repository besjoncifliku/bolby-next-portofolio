import React from 'react'
import '../../sass/navigatorStyle.scss';

export const NavigatorView = () => {
    return (
        <div className="nav-bar">
            <h1>Besjon<span className={'nav-point'}>.</span></h1>
            <div className={'main-menu'}>
                <a className={'sub-menu active'}><i className="fas fa-home"></i> Home</a>
                <a className={'sub-menu'}><i className="fas fa-user-ninja"></i> About</a>
                <a className={'sub-menu'}><i className="fas fa-briefcase"></i> Services</a>
                <a className={'sub-menu'}><i className="fas fa-graduation-cap"></i> Experience</a>
                <a className={'sub-menu'}><i className="fas fa-tasks"></i> Projects</a>
                <a className={'sub-menu'}><i className="fas fa-edit"></i> Blog</a>
                <a className={'sub-menu'}><i className="far fa-comments"></i> Contact</a>
            </div>
            <div className={'imprint'}>
                <p>&copy; 2021 Besjon Cifliku</p>
            </div>
        </div>
    );
}