import React, {useEffect, useState} from 'react'
import '../../sass/_work.scss';
import { SpringModal } from "@/utils/modal.utils";
export const ProjectElement = (props: any) => {
    const project = props.project;
    const [open, setOpen] = useState(false);

    const handleUpdateState = (newState: boolean) => {
        setOpen(newState);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <div className="project-element rounded shadow-dark padding-30" onClick={handleOpen}>
                <div className={'project-image'}>
                    <h2>{project.title}</h2>
                </div>
                <div className={'project-info'}>
                    <div className={'project-title'}>
                        <h2>{project.title}</h2>
                    </div>
                </div>
                <div className={'git-hub-link'}>
                    <i className="fab fa-github"></i>
                </div>
                <div className={'project-category'}>
                    <span>{project.category[1]}, {project.category[2]}</span>
                </div>
            </div>
            {open && <SpringModal key={project.title} project={project} open={open} onUpdateModal={handleUpdateState}/>}
        </>
    );
}

