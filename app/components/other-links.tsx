import Link from "next/link";

type OtherLinksProps = {
    links: {
        name: string,
        value: string,
    }[];
}

export default function OtherLinks({ links }: OtherLinksProps) {
    return (
        <div>
            <p>Other links:</p>
            {
                links.map((one, idx) =>
                    <Link key={idx} className="font-semibold" href={one.value}>
                        <p>{one.name}</p>
                    </Link>
                )
            }
        </div>
    );
}