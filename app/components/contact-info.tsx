import Link from "next/link";
import PdfButton from "./pdf-button/pdf-button";

export default function ContactInfo() {
    return (
        <div className='pt-3 text-sm'>
            <div>Contact info:</div>
            <div>{'mnkrp.ml@gmail.com'}</div>
            <div>{'+38 099 925 78 73'}</div>
            <Link className="link" href='https://t.me/iloveparting'>Telegram</Link>
          <PdfButton />
        </div>
    );
}
