'use client';

export default function PdfButton() {

    const printPdf = async () => {
        const html2pdf = await import('html2pdf.js');

        html2pdf.default()
            .set({
                margin: 0,
                html2canvas: {
                    scale: 2,
                },
                jsPDF: {
                    orientation: 'portrait',
                    format: window.innerWidth <= 1024 ? [210, 578] : [420, 509],
                }
            })
            .from(document.body)
            .toPdf()
            .save('oleg-bondarenko-cv.pdf');
    }

    return (
        <div className="link cursor-pointer font-medium" onClick={printPdf}>(Download PDF)</div>
    );
}