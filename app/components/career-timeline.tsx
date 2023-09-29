interface ProjectInfo {
    from: Date,
    to: Date,
    title: string,
    techStack: string,
    description: string,
}

interface CareerProps {
    occupations: {
        from: Date,
        to: Date,
        employer: string,
        projects: ProjectInfo[],
    }[]
};

export default function CareerTimeline({ occupations }: CareerProps) {
    return (
        <div className='border-black border-l-4 m-2'>
            {
                occupations.map((occupation, outer) =>
                    occupation.projects.map((project, inner) =>
                        <div key={`${outer}${inner}`}>
                            <p >{occupation.employer}</p>
                            <p >{project.title}</p>
                        </div>
                    )
                )
            }
        </div>
    )
};