"use client";

export default function PdfButton() {
  const printPdf = async () => {
    window.print();
  };

  return (
    <div className="link cursor-pointer font-medium" onClick={printPdf}>
      (Download PDF)
    </div>
  );
}
