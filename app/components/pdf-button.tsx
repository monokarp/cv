import Link from "next/link";

export default function PdfButton() {

    return (
        <div className="flex justify-center items-center">
            <Link className="link px-2 pb-2" href="./oleg-bondarenko-cv.pdf">PDF</Link>
        </div>
    )
}