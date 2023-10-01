import Link from "next/link";

export default function ContactInfo() {
    return (
        <div className='pt-3 text-sm'>
            <div>Contact info:</div>
            <div>{'mnkrp.ml@gmail.com'}</div>
            <div>{'+38 099 925 78 73'}</div>
            <Link className="link" href='https://t.me/iloveparting'>Telegram</Link>
        </div>
    );
}
