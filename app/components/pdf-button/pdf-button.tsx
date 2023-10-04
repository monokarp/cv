'use client';

export default function PdfButton() {

    const printPdf = async () => {
        const html2pdf = await import('html2pdf.js');

        html2pdf.default()
            .set({
                margin: 0,
                pagebreak: {
                    mode: 'css',
                },
                html2canvas: {
                    scale: 2,
                },
                jsPDF: { format: [420, 509], orientation: 'portrait' }
            })
            .from(document.body)
            .toPdf()
            .save('oleg-bondarenko-cv.pdf');
    }

    return (
        <div className="link cursor-pointer font-medium" onClick={printPdf}>(Download PDF)</div>
    );
}