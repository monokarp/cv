
import React from "react";
import TimelineBorder from "./timeline-border";
import ProjectSummary from './project-summary';
import { ProjectInfo } from './project-info';

interface CareerProps {
    projects: ProjectInfo[],
};

export default function CareerTimeline({ projects }: CareerProps) {
    return (
        <div className='m-2'>
            {
                projects.reverse().map((project, index) =>
                    <div className='flex flex-row' key={index}>
                        <TimelineBorder index={index} totalNodes={projects.length} />
                        <ProjectSummary project={project} />
                    </div>
                )
            }
        </div>
    )
};