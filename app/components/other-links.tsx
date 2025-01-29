import Link from "next/link";

interface LinkGroup {
    title: string;
    links: {
        name: string,
        value: string,
    }[];
}

type OtherLinksProps = {
    groups: LinkGroup[];
};

export default function OtherLinks({ groups }: OtherLinksProps) {
    return (
        <div>
            {
                groups.map((group, idx) => <LinkGroup key={idx} group={group} />)
            }
        </div>
    );
}

function LinkGroup({ group }: { group: LinkGroup }) {
    return (
        <div className='pt-3 text-base'>
            <div className="font-bold">{group.title}</div>
            {
                group.links.map((one, idx) =>
                    <div key={idx} className="link text-sm">
                        <Link href={one.value}>{one.name}</Link>
                    </div>
                )
            }
        </div>
    );
}