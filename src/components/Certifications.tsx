import React, { useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const certificates = [
    {
      title: "Front End Web Developer Certification",
      issuer: "Infosys Springboard",
      date: "May 30, 2025",
      image: "/lovable-uploads/image-1767538904014.jpeg"
    },
    {
      title: "Full Stack Web Development Internship",
      issuer: "Media Wave Technologies",
      date: "June 2-18, 2025",
      image: "/lovable-uploads/image-1767538849219.jpeg"
    },
    {
      title: "HackIndia 2025",
      issuer: "Certificate of Participation",
      date: "2025",
      image: "/lovable-uploads/image-1767538898949.jpeg"
    },
    {
      title: "Core JAVA Course",
      issuer: "Kongunadu College of Engineering",
      date: "Sep 23-28, 2024",
      image: "/lovable-uploads/image-1767538880004.jpeg"
    },
    {
      title: "Industrial Visit - Software Development",
      issuer: "Techvolt Software Pvt.Ltd",
      date: "Aug 28, 2024",
      image: "/lovable-uploads/image-1767538893927.jpeg"
    },
    {
      title: "Full Stack Development Workshop",
      issuer: "Nithra Consultancy Services",
      date: "Aug 21, 2025",
      image: "/lovable-uploads/image-1767538868646.jpeg"
    },
    {
      title: "Full Stack Development Workshop",
      issuer: "Abservetech",
      date: "Jan 28, 2025",
      image: "/lovable-uploads/image-1767538874392.jpeg"
    },
    {
      title: "Conceptual Carnival - NEXOVATE '24",
      issuer: "Kongunadu College of Engineering",
      date: "Mar 8, 2024",
      image: "/lovable-uploads/image-1767538889388.jpeg"
    },
    {
      title: "PAPERENZA Technical Symposium",
      issuer: "Annapoorana Engineering College",
      date: "Oct 8, 2024",
      image: "/lovable-uploads/image-1767538884648.jpeg"
    }
  ];

  return (
    <section id="certifications" className="py-12 md:py-16 lg:py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Certifications & Achievements
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Recognized excellence in technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-blue-400 text-sm font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-xs mb-4">
                  {cert.date}
                </p>
                <button 
                  onClick={() => setSelectedCert(cert.image)}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-800 px-6 py-4 rounded-xl">
            <Award className="w-6 h-6 text-blue-500" />
            <div className="text-left">
              <p className="text-2xl font-bold text-white">{certificates.length}+</p>
              <p className="text-sm text-gray-400">Certifications & Achievements</p>
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedCert} 
              alt="Certificate"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
