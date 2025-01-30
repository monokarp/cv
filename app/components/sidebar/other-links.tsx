import Link from "next/link";
import Delimiter from "../common/delimiter";

interface LinkGroup {
  title: string;
  links: {
    name: string;
    value: string;
  }[];
}

type OtherLinksProps = {
  groups: LinkGroup[];
};

export default function OtherLinks({ groups }: OtherLinksProps) {
  return (
    <div>
      {groups.map((group, idx) => (
        <LinkGroup key={idx} group={group} />
      ))}
    </div>
  );
}

function LinkGroup({ group }: { group: LinkGroup }) {
  return (
    <div className="pt-3 text-sm">
      <div className="font-bold text-xl">{group.title}</div>
      <Delimiter />
      {group.links.map((one, idx) => (
        <div key={idx} className="link hover:text-orange-400 hover:font-bold">
          <Link href={one.value}>{one.name}</Link>
        </div>
      ))}
    </div>
  );
}
