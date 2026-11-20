import { motion, useReducedMotion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import {
  ABOUT_HIGHLIGHTS,
  ABOUT_PARAGRAPHS,
  EDUCATION_INFO,
} from '../data/portfolioData';

export function AboutEducation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-y border-[#303039] bg-[#16161D] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-start"
        >
          {/* About Me Column */}
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-[#C6283D]">Background</p>
            <h2
              id="about-heading"
              className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl"
            >
              About Me
            </h2>

            <div className="mt-6 space-y-5 text-[15px] sm:text-base leading-[1.7] text-[#92929D]">
              {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-8 divide-y divide-[#303039]/80 border-t border-b border-[#303039]/80">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 gap-1.5 py-4 sm:grid-cols-12 sm:gap-4"
                >
                  <dt className="sm:col-span-4 text-xs font-semibold tracking-wider text-[#C6283D] pt-0.5">
                    {item.label}
                  </dt>
                  <dd className="sm:col-span-8 text-sm leading-relaxed text-[#F5F5F5]/90">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Education Column */}
          <div id="education" className="lg:col-span-5">
            <p className="text-sm font-medium text-[#C6283D]">Academic Path</p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#F5F5F5]">
              Education
            </h3>

            <div className="mt-6 rounded-2xl border border-[#303039] bg-[#1A1A22] p-6 sm:p-7 transition-colors duration-200 hover:border-[#C6283D]/50">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#303039] bg-[#16161D] text-[#C6283D]">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#92929D] tabular-nums">
                  <Calendar className="h-3.5 w-3.5 text-[#C6283D]" aria-hidden="true" />
                  Expected {EDUCATION_INFO.expectedGraduation}
                </span>
              </div>

              <h4 className="mt-5 font-display text-lg font-semibold leading-snug text-[#F5F5F5]">
                {EDUCATION_INFO.institution}
              </h4>
              <p className="mt-1.5 text-sm font-medium text-[#C6283D]">
                {EDUCATION_INFO.degree}
              </p>

              <div className="mt-5 border-t border-[#303039] pt-4 text-sm text-[#92929D]">
                <p>Expected Graduation: <span className="text-[#F5F5F5] tabular-nums">{EDUCATION_INFO.expectedGraduation}</span></p>
                <p className="mt-1.5 leading-relaxed">
                  {EDUCATION_INFO.focusNote}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
