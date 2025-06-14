
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "@/components/ui/use-toast";

export const useResumePDF = () => {
  const generatePDF = async () => {
    try {
      const resumeNode = document.querySelector(".max-w-6xl.bg-white");
      if (!resumeNode) {
        toast({
          title: "Resume not found",
          description: "Could not find resume content to export.",
          variant: "destructive",
        });
        return;
      }

      // Render DOM node to canvas
      const canvas = await html2canvas(resumeNode as HTMLElement, {
        scale: 2,
        backgroundColor: "#fff",
        useCORS: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      // A4 dimensions in points
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Calculate scaling to fit the entire canvas in one page
      const canvasAspect = canvas.width / canvas.height;
      const pageAspect = pageWidth / pageHeight;

      let renderWidth = pageWidth;
      let renderHeight = pageHeight;
      let x = 0;
      let y = 0;

      if (canvasAspect >= pageAspect) {
        // Fit width
        renderWidth = pageWidth;
        renderHeight = (canvas.height * pageWidth) / canvas.width;
        y = (pageHeight - renderHeight) / 2; // center vertically
      } else {
        // Fit height
        renderHeight = pageHeight;
        renderWidth = (canvas.width * pageHeight) / canvas.height;
        x = (pageWidth - renderWidth) / 2; // center horizontally
      }

      pdf.addImage(imgData, "PNG", x, y, renderWidth, renderHeight);
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
