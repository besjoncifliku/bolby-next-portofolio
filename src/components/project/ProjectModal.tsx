import React, { FC } from "react";
import {
    ProjectElementCategory,
    ProjectElementLeftSide,
    ProjectElementModal,
    ProjectElementRightSide,
    ProjectElementTechStack
} from "@/styled-components/projects.styled";
import { ProjectDescription } from "@/components/project/ProjectDescription";

export const ProjectModal:FC<any> = (props: any) => {
    const techStack: string[] = props?.tech?.split(', ') ?? [];

    return (
        <ProjectElementModal>
            <ProjectElementLeftSide>
                <p className={'absolute top-0.5 left-1 text-gray-400 text-xs'}>{props.date}</p>
                {/*<Carousel/>*/}
                <ProjectDescription title={props.title} description={props.description}></ProjectDescription>
            </ProjectElementLeftSide>
            <ProjectElementRightSide>
                <ProjectElementTechStack>
                    <div className="tools">
                        <div className="circle">
                            <span className="red box"></span>
                        </div>
                        <div className="circle">
                            <span className="yellow box"></span>
                        </div>
                        <div className="circle">
                            <span className="green box"></span>
                        </div>
                        <div className={'stack-description'}>techStack.tsx</div>
                    </div>
                    <p className={'tech-stack-container'}>
                        {techStack.map((element: string) => (
                            <span key={element} className={'tech-stack-badge'}>{element.toLowerCase()}</span>
                        ))}
                    </p>
                    <a href={'/#'} className={'text-gray-400 text-xs p-2'}>{props.link}</a>
                </ProjectElementTechStack>
                <ProjectElementCategory>
                    {props.category}
                </ProjectElementCategory>
            </ProjectElementRightSide>
        </ProjectElementModal>
    );
}