import Link from "next/link";
import Delimiter from "../common/delimiter";

export default function ContactInfo() {
  return (
    <div className="pt-3 text-sm">
      <div className="text-xl font-bold">Contact info:</div>
      <Delimiter />
      <div>{"mnkrp.ml@gmail.com"}</div>
      <div>{"+48 503 524 097 (WhatsApp)"}</div>
      <div>{"+38 099 925 78 73 (Telegram)"}</div>
      <div className="link hover:text-orange-400 hover:font-bold">
          <Link href='./oleg-bondarenko-cv.pdf'>(Download PDF)</Link>
        </div>
    </div>
  );
}
