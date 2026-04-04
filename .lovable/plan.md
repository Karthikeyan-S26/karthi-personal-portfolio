

## Plan: Replace Profile Image and Resume PDF

### What will change
1. **Profile image** -- Replace the current profile photo (`/Uploads/Profile (1).jpg`) with your uploaded image (`IMG20260213164410.jpeg`) across all components that reference it (Hero, ResumeSidebar).

2. **Resume PDF download** -- Update the download button to serve your uploaded PDF (`karthikeyan_S_Resume.pdf`) directly instead of generating one programmatically.

### Technical details

**Files to copy:**
- `user-uploads://IMG20260213164410.jpeg` → `public/Uploads/profile.jpg`
- `user-uploads://karthikeyan_S_Resume.pdf` → `public/Uploads/Karthikeyan_S_Resume.pdf`

**Files to edit:**
- `src/components/Hero.tsx` -- Change image src from `/Uploads/Profile (1).jpg` to `/Uploads/profile.jpg`
- `src/components/resume/ResumeSidebar.tsx` -- Change image src from `/Uploads/Profile (1).jpg` to `/Uploads/profile.jpg`
- `src/components/resume/ResumePDFDownloadButton.tsx` -- Replace the `generatePDF` logic with a simple anchor link that downloads `/Uploads/Karthikeyan_S_Resume.pdf`

