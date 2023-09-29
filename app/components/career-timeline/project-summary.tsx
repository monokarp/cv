import { ProjectInfo } from "./project-info"

interface ProjectSummaryProps {
    project: ProjectInfo
}

export default function ProjectSummary({ project }: ProjectSummaryProps) {
    return (
        <div className='p-4'>
            <p>{project.employer}</p>
            <p>{project.title}</p>
        </div>
    )
}