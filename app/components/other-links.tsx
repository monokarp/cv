import Link from "next/link";

type OtherLinksProps = {
    links: {
        name: string,
        value: string,
    }[];
}

export default function OtherLinks({ links }: OtherLinksProps) {
    return (
        <div className='pt-3 text-sm'>
            <div>Relevant links:</div>
            {
                links.map((one, idx) =>
                    <div key={idx} className="link">
                        <Link href={one.value}>{one.name}</Link>
                    </div>
                )
            }
        </div>
    );
}