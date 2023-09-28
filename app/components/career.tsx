interface CareerProps {
    occupations: {
        from: Date,
        to: Date | null,
        title: string,
        projects: {
            from: Date,
            to: Date | null,
            techs: string,
            description: string,
        }[]
    }[]
};

export default function Career({ occupations }: CareerProps) {
    return (
        <div>
            <p>Career:</p>
        </div>
    )
};