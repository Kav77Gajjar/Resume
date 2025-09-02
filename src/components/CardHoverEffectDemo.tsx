'use client';

import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Resume Review",
    description:
      "Professional review of your resume with detailed feedback and suggestions for improvement.",
    link: "/coming-soon",
  },
  {
    title: "LinkedIn Optimization",
    description:
      "Expert optimization of your LinkedIn profile to attract recruiters and showcase your professional brand.",
    link: "/coming-soon",
  },
  {
    title: "Cover Letter Writing",
    description:
      "Custom cover letter writing service tailored to specific job applications and industries.",
    link: "/coming-soon",
  },
  {
    title: "Career Coaching",
    description:
      "One-on-one coaching sessions to help you navigate your career path and achieve your professional goals.",
    link: "/coming-soon",
  },
  {
    title: "ATS Optimization",
    description:
      "Ensure your resume passes through Applicant Tracking Systems with our specialized optimization service.",
    link: "/coming-soon",
  },
  {
    title: "Interview Preparation",
    description:
      "Comprehensive interview preparation including mock interviews and feedback to help you land your dream job.",
    link: "/coming-soon",
  },
];
