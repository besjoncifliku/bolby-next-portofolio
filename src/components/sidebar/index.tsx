import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ChatIcon from '@mui/icons-material/Chat';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import '../../sass/_sidebar.scss';

const sidebarEntries = {
    'Home': HomeIcon,
    'About': PermIdentityIcon,
    'Research': BusinessCenterIcon,
    'Projects': AssignmentTurnedInIcon,
    'Blog': DriveFileRenameOutlineIcon,
    'Contact': ChatIcon
}

export const SidebarView = () => {
    return (
        <>
            <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar"
                    aria-controls="cta-button-sidebar" type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd"
                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="cta-button-sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 sidebar">
                    <h1 className={'relative ml-3 text-white text-2xl font-sans font-extrabold cursor-pointer'}>Besjon<span className={'nav-point'}>.</span></h1>

                    <ul className="space-y-2 font-medium sidebar-entries">
                        {Object.entries(sidebarEntries).map(([menu, IconElement]) => (
                            // eslint-disable-next-line react/jsx-key
                            <li>
                                <a href="#"
                                   className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-yellow-400 dark:hover:bg-gray-700 group">
                                    {<IconElement
                                        className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 dark:group-hover:text-white"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        viewBox="0 0 22 21"/>}
                                    <span className="ms-3 mt-1 tracking-wide">{menu}
                                        {menu === 'Blog' &&
                                            <span
                                                className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                                3
                                            </span>
                                        }
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div id="dropdown-cta" className="p-4 mt-16 rounded-lg bg-white" role="alert">
                        <div className="flex items-center mb-3">
                            <span
                                className="bg-yellow-300 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded">Disclaimer</span>
                            <button type="button"
                                    className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                                    data-dismiss-target="#dropdown-cta" aria-label="Close">
                                <span className="sr-only">Close</span>
                                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                            </button>
                        </div>
                        <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
                            Developed in Next JS.
                        </p>
                        <a className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                           href="#">Original Bolby Design - Check it out</a>
                    </div>

                    <div className={'absolute bottom-2 left-12 text-gray-400 text-xs tracking-widest text-center'}>
                        <p>&copy; {new Date().getFullYear()} Besjon Cifliku</p>
                    </div>
                </div>
            </aside>
        </>
    );
}