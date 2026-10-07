import { useState } from 'react';
import { Award, ArrowDownWideNarrow, ExternalLink, Briefcase, Trophy, Presentation, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { categories, certificates, getCertificates, type Category, type Certificate } from './certifications-data';

const categoryIcons = {
  All: Award,
  Internships: Briefcase,
  Hackathons: Trophy,
  'Presentations (PPTs)': Presentation,
  'Workshops & Courses': GraduationCap,
  Certifications: Award,
};

const Certifications = () => {
  const [category, setCategory] = useState<Category>('All');
  const [order, setOrder] = useState<'newest' | 'oldest'>('newest');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const visibleCertificates = getCertificates(category, order);

  return (
    <section id="certifications" className="certificate-showcase py-12 md:py-16 lg:py-20 px-4 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Certifications & Achievements</h2>
          <div className="w-20 md:w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Certificate categories">
          {categories.map(item => {
            const Icon = categoryIcons[item];
            const count = certificates.filter(cert => item === 'All' || cert.category === item).length;
            return <Button key={item} variant={category === item ? 'default' : 'secondary'} size="sm" aria-pressed={category === item} onClick={() => setCategory(item)}>
              <Icon aria-hidden="true" />{item}<span className="opacity-70">{count}</span>
            </Button>;
          })}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 md:mb-8">
          <p className="text-sm text-muted-foreground">{visibleCertificates.length} {category === 'All' ? 'certificates & achievements' : category.toLowerCase()}</p>
          <label className="flex items-center gap-2 text-sm" htmlFor="certificate-order">
            <ArrowDownWideNarrow className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="sr-only">Sort certificates</span>
            <select id="certificate-order" value={order} onChange={e => setOrder(e.target.value === 'oldest' ? 'oldest' : 'newest')} className="h-10 rounded-md border border-border bg-card text-card-foreground px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <option value="newest">Newest first</option><option value="oldest">Oldest first</option>
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleCertificates.map(cert => {
            const Icon = categoryIcons[cert.category];
            return <article key={`${cert.title}-${cert.issuer}`} className="bg-card rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 motion-safe:hover:-translate-y-2 group flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-contain p-2 motion-safe:group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute top-3 right-3 bg-primary p-2 rounded-full"><Icon className="w-5 h-5 text-primary-foreground" aria-hidden="true" /></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-primary font-medium mb-2">{cert.category}</p>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{cert.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>
                <p className="text-muted-foreground text-xs mb-4">{cert.date}</p>
                <Button variant="link" onClick={() => setSelectedCert(cert)} className="p-0 h-auto justify-start self-start mt-auto" aria-label={`View certificate: ${cert.title}`}>
                  View Certificate<ExternalLink aria-hidden="true" />
                </Button>
              </div>
            </article>;
          })}
        </div>

        <Dialog open={selectedCert !== null} onOpenChange={open => { if (!open) setSelectedCert(null); }}>
          <DialogContent className="certificate-showcase max-w-5xl w-[calc(100%-2rem)] max-h-[95dvh] overflow-y-auto bg-card text-card-foreground border-border p-4 sm:p-6">
            <DialogTitle className="pr-8 leading-snug">{selectedCert?.title}</DialogTitle>
            <DialogDescription>{selectedCert?.issuer} · {selectedCert?.date}</DialogDescription>
            {selectedCert && <img src={selectedCert.image} alt={selectedCert.title} className="w-full max-h-[75dvh] object-contain" />}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;