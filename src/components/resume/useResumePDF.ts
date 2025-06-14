
import jsPDF from "jspdf";
import { toast } from "@/components/ui/use-toast";

// This is the path to your uploaded resume image
const resumeImage = "/lovable-uploads/d5884f26-a8e0-4739-9ce5-473a12e69518.png";

export const useResumePDF = () => {
  const generatePDF = async () => {
    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      // Properly wait for the image to load with a Promise
      const loadImage = (src: string) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new window.Image();
          img.crossOrigin = "Anonymous";
          img.src = src;
          img.onload = () => resolve(img);
          img.onerror = reject;
        });

      const img = await loadImage(resumeImage);

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
      toast({
        title: "Success",
        description: "PDF downloaded successfully!",
      });
    } catch (err) {
      toast({
        title: "Error downloading PDF",
        description: "Could not generate PDF. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return { generatePDF };
};
