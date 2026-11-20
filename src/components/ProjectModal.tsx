import { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Clock,
  Check,
} from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Modal Surface */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 12 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 12 }
            }
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#303039] bg-[#16161D] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.9)]"
          >
            {/* Top accent rule */}
            <div
              aria-hidden="true"
              className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C6283D] to-transparent"
            />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#303039] px-6 py-5">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#92929D] tabular-nums">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1 font-medium text-[#F5F5F5]">
                    {project.status === 'Completed' ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#C6283D]" aria-hidden="true" />
                    ) : (
                      <Clock className="h-3.5 w-3.5 text-[#F04455]" aria-hidden="true" />
                    )}
                    <span>{project.status}</span>
                  </span>
                </div>
                <h3
                  id="project-modal-title"
                  className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#F5F5F5]"
                >
                  {project.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#303039] bg-[#1A1A22] text-[#92929D] transition-colors hover:border-[#C6283D] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-6 p-6">
              <div>
                <h4 className="text-xs font-semibold tracking-wider text-[#C6283D]">
                  Overview
                </h4>
                <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-[#92929D]">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-wider text-[#C6283D]">
                  Key Features
                </h4>
                <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-snug text-[#F5F5F5]"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#C6283D]"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[#303039] pt-5">
                <h4 className="text-xs font-semibold tracking-wider text-[#C6283D]">
                  Technology Stack
                </h4>
                <p className="mt-2 text-sm font-medium text-[#F5F5F5]">
                  {project.technologies.join(' · ')}
                </p>
              </div>

              {/* Action Footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#303039] pt-5">
                <div className="flex flex-wrap items-center gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#C6283D] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#F04455] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F04455]"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      <span>View Repository</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-[#303039] bg-[#1A1A22] px-4 py-2.5 text-sm text-[#92929D]">
                      <Github className="h-4 w-4" aria-hidden="true" />
                      <span>Repository Link Pending</span>
                    </span>
                  )}

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#303039] bg-[#1A1A22] px-4 py-2.5 text-sm font-medium text-[#F5F5F5] transition-colors hover:border-[#C6283D] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-[#303039] px-4 py-2.5 text-sm font-medium text-[#92929D] transition-colors hover:text-[#F5F5F5] hover:border-[#92929D] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
