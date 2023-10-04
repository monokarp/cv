
import React from "react";
import TimelineBorder from "./timeline-border";
import ProjectSummary from './project-summary';
import { ProjectInfo } from './project-info';
import { formatDate } from "./format-date";

interface CareerProps {
    projects: ProjectInfo[],
};

export default function CareerTimeline({ projects }: CareerProps) {

    const timelineStart = projects[0].from;
    const timelineEnd = projects[projects.length - 1].to;
    const yearTotal = new Date(timelineEnd.getTime() - timelineStart.getTime()).getUTCFullYear() - 1970

    return (
        <div className='m-2'>
            <div className='pb-2 text-sm'>{`Timeline: ${formatDate(timelineStart)} - ${formatDate(timelineEnd)} (${yearTotal} years)`}</div>
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