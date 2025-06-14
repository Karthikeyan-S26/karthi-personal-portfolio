
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

      // Image stats
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      let remainingHeight = imgHeight;
      let positionY = 0;

      // If resume fits on one page
      if (imgHeight <= pageHeight) {
        let y = (pageHeight - imgHeight) / 2;
        pdf.addImage(imgData, "PNG", 0, y, imgWidth, imgHeight);
      } else {
        // Multi-page
        let pageNum = 0;
        // Height of one page in the image's scale
        const pageImageHeight = (canvas.width * pageHeight) / pageWidth;

        while (remainingHeight > 0) {
          const sourceY = pageNum * pageImageHeight;
          // Create a canvas for one page portion at a time
          const pageCanvas = document.createElement("canvas");
          pageCanvas.width = canvas.width;
          pageCanvas.height = Math.min(pageImageHeight, canvas.height - sourceY);

          const ctx = pageCanvas.getContext("2d");
          if (ctx) {
            ctx.fillStyle = "#fff";
            ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
            ctx.drawImage(
              canvas,
              0,
              sourceY,
              canvas.width,
              pageCanvas.height,
              0,
              0,
              canvas.width,
              pageCanvas.height
            );
          }

          const pageImgData = pageCanvas.toDataURL("image/png");

          pdf.addImage(
            pageImgData,
            "PNG",
            0,
            0,
            pageWidth,
            (pageCanvas.height * pageWidth) / canvas.width
          );
          remainingHeight -= pageHeight;

          if (remainingHeight > 0) {
            pdf.addPage();
          }
          pageNum++;
        }
      }

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
