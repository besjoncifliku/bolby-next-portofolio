import React, { FC } from "react";
import {
  ProjectElementCategory,
  ProjectElementLeftSide,
  ProjectElementModal,
  ProjectElementRightSide,
  ProjectElementTechStack,
} from "@/styled-components/projects.styled";
import { ProjectDescription } from "@/components/project/ProjectDescription";
import { useMediaQuery } from "@mui/material";

export const ProjectModal: FC<any> = (props: any) => {
  const techStack: string[] = props?.tech?.split(", ") ?? [];
  const isPortrait = useMediaQuery("(max-width: 599px)");

  return (
    <ProjectElementModal isPortrait={isPortrait}>
      <ProjectElementLeftSide isPortrait={isPortrait}>
        <p className={"absolute top-0.5 left-1 text-gray-400 text-xs"}>
          {props.date}
        </p>
        {/*<Carousel/>*/}
        <ProjectDescription
          title={props.title}
          description={props.description}
        ></ProjectDescription>
      </ProjectElementLeftSide>
      <ProjectElementRightSide isPortrait={isPortrait}>
        <ProjectElementTechStack isPortrait={isPortrait}>
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
            <div className={"stack-description"}>techStack.tsx</div>
          </div>
          <p className={"tech-stack-container"}>
            {techStack.map((element: string) => (
              <span key={element} className={"tech-stack-badge"}>
                {element.toLowerCase()}
              </span>
            ))}
          </p>
          <a href={props.link} className="github-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                fill="white"
              ></path>
            </svg>
            <p className="text">Leave a star</p>
          </a>
          {props.previewLink && (
            <a href={props.previewLink} className="preview-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                ></path>
              </svg>
              <span>Launch demo</span>
            </a>
          )}
        </ProjectElementTechStack>
        <ProjectElementCategory isPortrait={isPortrait}>
          {props.category}
        </ProjectElementCategory>
      </ProjectElementRightSide>
    </ProjectElementModal>
  );
};
