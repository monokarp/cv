import Link from "next/link";
import PdfButton from "./pdf-button/pdf-button";

export default function ContactInfo() {
    return (
        <div className='pt-3 text-sm'>
            <div className="font-bold">Contact info:</div>
            <div>{'mnkrp.ml@gmail.com'}</div>
            <div>{'+48 503 524 097 (WhatsApp)'}</div>
            <div>{'+38 099 925 78 73 (Telegram)'}</div>
          <PdfButton />
        </div>
    );
}
