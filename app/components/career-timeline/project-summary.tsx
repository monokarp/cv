import { formatDate } from "./format-date"
import { ProjectInfo } from "./project-info"

interface ProjectSummaryProps {
    project: ProjectInfo
}

export default function ProjectSummary({ project }: ProjectSummaryProps) {
    return (
        <div className='ml-4 mb-4 p-4 rounded-md bg-white text-sm tracking-tight w-full'>
            <p className='text-lg tracking-normal'>{project.employer}</p>
            <p className='pb-2'>{`${formatDate(project.from)} - ${formatDate(project.to)}`}</p>
            <p className='text-base pb-1'>{project.title}</p>
            <p className='pb-1 my-2'>{`Key technologies: ${project.techStack}`}</p>
            <p className='pb-1'>{`Team composition: ${project.team}`}</p>
            <p className='pb-1'>{project.description}</p>
        </div>
    )
}