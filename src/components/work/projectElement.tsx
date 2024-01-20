import React, {useState} from 'react'
import '../../sass/_work.scss';
import SpringModal from "../../utils/modal.utils";
export const ProjectElement = (props: any) => {
    const project = props.project;
    const [open, setOpen] = useState(false);
    function handleUpdateState(newState: boolean | ((prevState: boolean) => boolean)) {
        setOpen(newState);
        console.log(open);
    }
    return (
        <div className="project-element rounded shadow-dark padding-30" onClick={() => setOpen(!open)}>
            <div className={'project-image'}>
                <h2>{project.title}</h2>
            </div>
            <div className={'project-info'} >
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
            {open && <SpringModal key={project.title} project={project} open={open} onUpdateModal={handleUpdateState}/>}
        </div>
    );
}

