import { Github, Linkedin, Send } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="border-t border-[#303039] bg-[#16161D] py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <p className="text-sm text-[#92929D] text-center sm:text-left">
          {PORTFOLIO_CONFIG.footerText}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303039] bg-[#1A1A22] text-[#92929D] transition-colors hover:border-[#C6283D] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href={PORTFOLIO_CONFIG.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303039] bg-[#1A1A22] text-[#92929D] transition-colors hover:border-[#C6283D] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
          </a>

          {PORTFOLIO_CONFIG.linkedinUrl ? (
            <a
              href={PORTFOLIO_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#303039] bg-[#1A1A22] text-[#92929D] transition-colors hover:border-[#C6283D] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D]"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : (
            <span
              title="LinkedIn URL configurable in portfolioData.ts"
              aria-label="LinkedIn placeholder"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-dashed border-[#303039] bg-[#101014] text-[#92929D]/60"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
