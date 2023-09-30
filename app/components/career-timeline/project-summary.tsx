import { ProjectInfo } from "./project-info"

interface ProjectSummaryProps {
    project: ProjectInfo
}

const formatDate = (date: Date) => date.toLocaleDateString('en-us', { year: "numeric", month: "short" });

export default function ProjectSummary({ project }: ProjectSummaryProps) {
    return (
        <div className='p-4 m-4 rounded-md bg-white'>
            <p>{`${formatDate(project.from)} - ${formatDate(project.to)} ${project.employer}`}</p>
            <p>{project.title}</p>
            <p>{`Key technologies: ${project.techStack}`}</p>
            <p>{`Team composition: ${project.team}`}</p>
            <p>{project.description}</p>
        </div>
    )
}