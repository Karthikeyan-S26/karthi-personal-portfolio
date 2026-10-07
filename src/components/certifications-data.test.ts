import { describe, test, expect } from 'bun:test';
import { certificates, getCertificates } from './certifications-data';

describe('Certificate showcase rules', () => {
  test('includes both internships', () => {
    expect(getCertificates('Internships', 'newest').map(c => c.issuer)).toEqual(['Media Wave Technologies', 'Micro Information Technology Services (Micro IT)']);
  });
  test('includes all five requested hackathons', () => {
    const titles = getCertificates('Hackathons', 'newest').map(c => c.title);
    expect(titles).toEqual(['Thooral Hackathon – Infinitum 2026', 'Sri Eshwar THIRAN 2026 – AI Agentathon', 'INNOHACK 2026 – Cyber Security Track', 'HackIndia 2026', 'HackIndia 2025']);
  });
  test('uses Kongu as Conceptual Carnival host', () => {
    expect(certificates.find(c => c.title.includes('Conceptual Carnival'))?.issuer).toBe('Kongu Engineering College');
  });
  test('includes all three presentation hosts', () => {
    expect(getCertificates('Presentations (PPTs)', 'oldest').map(c => c.issuer)).toEqual(['Kongu Engineering College', 'Annapoorana Engineering College', 'Dhanalakshmi Srinivasan University']);
  });
  test('maps the Core JAVA and Abservetech certificates correctly', () => {
    expect(certificates.find(c => c.title.includes('Core JAVA'))?.image).toBe('/Uploads/image-1767538874392.jpeg');
    expect(certificates.find(c => c.issuer === 'Abservetech')?.image).toBe('/Uploads/image-1767538880004.jpeg');
  });
  test('sorts precisely dated certificates in either direction', () => {
    expect(getCertificates('All', 'oldest')[0].endDate).toBe('2024-03-08');
    expect(getCertificates('All', 'newest')[0].endDate).toBe('2026-02-14');
  });
});