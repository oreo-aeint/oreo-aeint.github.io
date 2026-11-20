import { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  Send,
  ArrowUpRight,
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    const email = PORTFOLIO_CONFIG.email;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 lg:py-28 bg-[#101014]"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-start"
        >
          {/* Left intro */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#C6283D]">Get in Touch</p>
            <h2
              id="contact-heading"
              className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl"
            >
              Let&apos;s Build Something Together.
            </h2>
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#92929D]">
              I&apos;m always interested in connecting with people, discussing ideas, and
              exploring opportunities in software development.
            </p>
          </div>

          {/* Right action cards */}
          <div className="lg:col-span-7 space-y-4">
            {/* Direct Email + One-Click Copy Card */}
            <div className="rounded-2xl border border-[#303039] bg-[#1A1A22] p-6 transition-colors duration-200 hover:border-[#C6283D]/50">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#303039] bg-[#16161D] text-[#C6283D]">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#92929D]">Direct Email</p>
                    <a
                      href={`mailto:${PORTFOLIO_CONFIG.email}`}
                      className="mt-1 block truncate font-display text-base sm:text-lg font-semibold text-[#F5F5F5] transition-colors hover:text-[#F04455] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D] rounded-sm"
                    >
                      {PORTFOLIO_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-live="polite"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#303039] bg-[#16161D] px-4 py-2.5 text-sm font-medium text-[#F5F5F5] transition-colors hover:border-[#C6283D] cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-[#C6283D]" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-[#92929D]" aria-hidden="true" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PORTFOLIO_CONFIG.email}`}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#C6283D] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#F04455] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F04455]"
                  >
                    <span>Send Email</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Cards Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* GitHub Social Card */}
              <a
                href={PORTFOLIO_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-[#303039] bg-[#1A1A22] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C6283D]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#303039] bg-[#16161D] text-[#F5F5F5] transition-colors group-hover:text-[#C6283D]">
                    <Github className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-base font-semibold text-[#F5F5F5]">
                      GitHub
                    </p>
                    <p className="truncate text-xs text-[#92929D]">
                      {PORTFOLIO_CONFIG.githubHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-[#92929D] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F04455]"
                  aria-hidden="true"
                />
              </a>

              {/* Telegram Social Card */}
              <a
                href={PORTFOLIO_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-[#303039] bg-[#1A1A22] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C6283D]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#303039] bg-[#16161D] text-[#F5F5F5] transition-colors group-hover:text-[#C6283D]">
                    <Send className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-base font-semibold text-[#F5F5F5]">
                      Telegram
                    </p>
                    <p className="truncate text-xs text-[#92929D]">
                      {PORTFOLIO_CONFIG.telegramHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-[#92929D] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F04455]"
                  aria-hidden="true"
                />
              </a>

              {/* LinkedIn Social Card (Configurable Placeholder) */}
              {PORTFOLIO_CONFIG.linkedinUrl ? (
                <a
                  href={PORTFOLIO_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:col-span-2 group flex items-center justify-between gap-4 rounded-2xl border border-[#303039] bg-[#1A1A22] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C6283D]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#303039] bg-[#16161D] text-[#F5F5F5] transition-colors group-hover:text-[#C6283D]">
                      <Linkedin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-base font-semibold text-[#F5F5F5]">
                        LinkedIn
                      </p>
                      <p className="truncate text-xs text-[#92929D]">
                        Connect on LinkedIn
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-[#92929D] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F04455]"
                    aria-hidden="true"
                  />
                </a>
              ) : (
                <div
                  aria-label="LinkedIn profile link pending configuration"
                  className="sm:col-span-2 flex items-center justify-between gap-4 rounded-2xl border border-dashed border-[#303039] bg-[#16161D]/70 p-5"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#303039] bg-[#1A1A22] text-[#92929D]">
                      <Linkedin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-base font-semibold text-[#F5F5F5]">
                        LinkedIn
                      </p>
                      <p className="truncate text-xs text-[#92929D]">
                        {PORTFOLIO_CONFIG.linkedinPlaceholderLabel}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
