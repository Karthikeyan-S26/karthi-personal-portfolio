import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "@/components/ui/use-toast";

// Instead of using a static image, capture the visible resume content
export const useResumePDF = () => {
  const generatePDF = async () => {
    try {
      // Get the DOM node of the main resume box
      const resumeNode = document.querySelector(".max-w-6xl.bg-white");
      if (!resumeNode) {
        toast({
          title: "Resume not found",
          description: "Could not find resume content to export.",
          variant: "destructive",
        });
        return;
      }

      // Render DOM node to canvas as an image (with high DPI)
      const canvas = await html2canvas(resumeNode as HTMLElement, {
        scale: 2,
        backgroundColor: "#fff", // ensures PDF has white background
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      // Fit the image to A4 dimensions, keeping aspect ratio
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      let y = 0;
      if (imgHeight < pageHeight) {
        y = (pageHeight - imgHeight) / 2;
      }

      pdf.addImage(imgData, "PNG", 0, y, imgWidth, imgHeight);
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
