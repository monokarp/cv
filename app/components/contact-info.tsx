interface ContactInfoProps {
    lines: string[],
}

export default function ContactInfo({ lines }: ContactInfoProps) {
    return (
        <div>
            <p key='0' className='pt-2 pb-2'>Contact info:</p>
            {lines.map((line, idx) => <p key={idx + 1} className='p-1'>{line}</p>)}
        </div>
    );
}