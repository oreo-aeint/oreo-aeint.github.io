import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Github,
} from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';
import { PhoneTriptych } from './PhoneTriptych';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 lg:py-28 bg-[#101014]"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-[#C6283D]">Selected Work</p>
          <h2
            id="projects-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl"
          >
            Featured Projects
          </h2>
          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#92929D]">
            Academic and personal applications focused on practical workflows, clean
            architecture, and dependable user experiences.
          </p>
        </motion.div>

        <div
          className={`mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 ${
            PROJECTS.length >= 3 ? 'lg:grid-cols-3' : ''
          }`}
        >
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#303039] bg-[#1A1A22] transition-all duration-200 hover:-translate-y-1 hover:border-[#C6283D]/60 hover:shadow-[0_20px_48px_-18px_rgba(198,40,61,0.22)]"
            >
              {/* Upper Card Preview Area — 3-Phone Showcase */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden border-b border-[#303039] bg-[#101014]">
                <PhoneTriptych
                  projectName={project.name}
                  showcase={project.showcase}
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                {/* Unboxed metadata row with explicit status text + icon */}
                <div className="flex items-center justify-between gap-2 text-xs text-[#92929D]">
                  <span className="truncate">{project.category}</span>
                  <span className="inline-flex shrink-0 items-center gap-1.5 font-medium text-[#F5F5F5]">
                    {project.status === 'Completed' ? (
                      <CheckCircle2
                        className="h-3.5 w-3.5 text-[#C6283D]"
                        aria-hidden="true"
                      />
                    ) : (
                      <Clock
                        className="h-3.5 w-3.5 text-[#F04455]"
                        aria-hidden="true"
                      />
                    )}
                    <span>{project.status}</span>
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-[#F5F5F5] transition-colors group-hover:text-white">
                  {project.name}
                </h3>

                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#92929D]">
                  {project.shortDescription}
                </p>

                {/* Unboxed tech stack list */}
                <div className="mt-5 border-t border-[#303039] pt-4">
                  <p className="text-xs font-medium text-[#F5F5F5]/90">
                    {project.technologies.join(' · ')}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="mt-5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#16161D] border border-[#303039] px-4 py-2 text-xs font-medium text-[#F5F5F5] transition-colors duration-150 hover:border-[#C6283D] hover:bg-[#C6283D] hover:text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
                  >
                    <span>Project Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} GitHub repository`}
                        title="View on GitHub"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303039] bg-[#16161D] text-[#92929D] transition-colors hover:border-[#C6283D] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    ) : (
                      <span
                        title="Repository link pending"
                        className="text-xs text-[#92929D]/70"
                      >
                        Repo pending
                      </span>
                    )}

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} live demo`}
                        title="Open live demo"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303039] bg-[#16161D] text-[#92929D] transition-colors hover:border-[#C6283D] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
