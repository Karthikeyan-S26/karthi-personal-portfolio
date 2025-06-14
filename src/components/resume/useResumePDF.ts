import jsPDF from "jspdf";

// This is the path to your uploaded resume image inside the public folder
const resumeImage = "/lovable-uploads/d5884f26-a8e0-4739-9ce5-473a12e69518.png";

export const useResumePDF = () => {
  const generatePDF = async () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    // Create an image element to load your resume image
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = resumeImage;

    img.onload = function () {
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Calculate image dimensions to fit A4 (keep aspect ratio)
      const imgRatio = img.width / img.height;
      let imgWidth = pageWidth;
      let imgHeight = imgWidth / imgRatio;

      if (imgHeight > pageHeight) {
        imgHeight = pageHeight;
        imgWidth = imgHeight * imgRatio;
      }

      // Center image on page
      const x = (pageWidth - imgWidth) / 2;
      const y = (pageHeight - imgHeight) / 2;

      pdf.addImage(img, "PNG", x, y, imgWidth, imgHeight);

      pdf.save("Karthikeyan_S_Resume.pdf");
    };

    img.onerror = function () {
      alert("Failed to load resume image for PDF!");
    };
  };

  return { generatePDF };
};
