import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Send } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ProfileFlipCard } from './ProfileFlipCard';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle architectural crimson radial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[780px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(198,40,61,0.10),transparent_70%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT SIDE — Introduction */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <p className="text-sm sm:text-base font-medium text-[#92929D]">
              {PORTFOLIO_CONFIG.roleLine}
            </p>

            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Hello, I&apos;m{' '}
              <span className="text-[#C6283D]">
                {PORTFOLIO_CONFIG.fullName}
              </span>
              .
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#92929D]">
              {PORTFOLIO_CONFIG.heroSummary}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('projects');
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-[#C6283D] px-5 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-6px_rgba(198,40,61,0.55)] transition-all duration-150 hover:bg-[#F04455] hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F04455] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101014]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('contact');
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-[#303039] bg-[#16161D] px-5 py-3 text-sm font-medium text-[#F5F5F5] transition-all duration-150 hover:border-[#C6283D] hover:bg-[#1A1A22] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
              >
                <Mail className="h-4 w-4 text-[#92929D]" aria-hidden="true" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-[#303039]/80 pt-6">
              <a
                href={PORTFOLIO_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-2 text-sm text-[#92929D] transition-colors duration-150 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D] rounded-sm"
              >
                <Github className="h-4 w-4 text-[#C6283D]" aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <span aria-hidden="true" className="text-[#303039]">
                ·
              </span>

              <a
                href={PORTFOLIO_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram profile"
                className="inline-flex items-center gap-2 text-sm text-[#92929D] transition-colors duration-150 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D] rounded-sm"
              >
                <Send className="h-4 w-4 text-[#C6283D]" aria-hidden="true" />
                <span>Telegram</span>
              </a>

              <span aria-hidden="true" className="text-[#303039]">
                ·
              </span>

              {PORTFOLIO_CONFIG.linkedinUrl ? (
                <a
                  href={PORTFOLIO_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex items-center gap-2 text-sm text-[#92929D] transition-colors duration-150 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D] rounded-sm"
                >
                  <Linkedin className="h-4 w-4 text-[#C6283D]" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              ) : (
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('contact');
                  }}
                  title="LinkedIn URL can be configured in portfolioData.ts"
                  aria-label="LinkedIn placeholder — see contact section"
                  className="inline-flex items-center gap-2 text-sm text-[#92929D] transition-colors duration-150 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D] rounded-sm"
                >
                  <Linkedin className="h-4 w-4 text-[#92929D]" aria-hidden="true" />
                  <span>LinkedIn (Configurable)</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* RIGHT SIDE — Interactive Profile Flip Card */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <ProfileFlipCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
