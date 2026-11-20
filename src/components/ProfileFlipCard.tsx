import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { RotateCw, User } from 'lucide-react';
import { PORTFOLIO_CONFIG, PROFILE_BACK_FACTS } from '../data/portfolioData';

export function ProfileFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="w-full max-w-[380px] mx-auto lg:mx-0 lg:ml-auto">
      <div className="flip-perspective relative w-full">
        <button
          type="button"
          onClick={toggleFlip}
          aria-pressed={isFlipped}
          aria-label={
            isFlipped
              ? 'Profile card back showing bio and quick facts. Activate to flip back to portrait.'
              : 'Profile card front showing portrait. Activate to flip and read quick facts.'
          }
          className="group relative block w-full aspect-[3/4] cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6283D] focus-visible:ring-offset-4 focus-visible:ring-offset-[#101014] rounded-2xl"
        >
          {/* Subtle crimson aura behind card on hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 rounded-3xl bg-[radial-gradient(circle_at_50%_45%,rgba(198,40,61,0.22),transparent_70%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
          />

          <motion.div
            animate={
              shouldReduceMotion
                ? { rotateY: 0 }
                : { rotateY: isFlipped ? 180 : 0 }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flip-preserve-3d relative h-full w-full"
          >
            {/* FRONT SIDE */}
            <div
              className={`flip-backface-hidden absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-[#303039] bg-[#1A1A22] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.75)] transition-colors duration-200 group-hover:border-[#C6283D]/70 ${
                shouldReduceMotion && isFlipped ? 'pointer-events-none opacity-0' : 'opacity-100'
              }`}
            >
              {/* Top subtle crimson accent rule */}
              <div
                aria-hidden="true"
                className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C6283D] to-transparent"
              />

              {/* Portrait image or graceful fallback when /images/profile.jpg is not yet placed */}
              <div className="relative flex-1 overflow-hidden bg-[#16161D]">
                {!imageError ? (
                  <img
                    src={PORTFOLIO_CONFIG.profileImagePath}
                    alt={`${PORTFOLIO_CONFIG.fullName} portrait`}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="relative flex h-full w-full flex-col items-center justify-center px-6 text-center bg-[radial-gradient(circle_at_50%_30%,rgba(198,40,61,0.14),transparent_65%),linear-gradient(180deg,#16161D_0%,#101014_100%)]">
                    {/* Architectural portrait frame guides */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-5 rounded-xl border border-[#303039]/70"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute top-5 left-5 h-4 w-4 border-t-2 border-l-2 border-[#C6283D]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute top-5 right-5 h-4 w-4 border-t-2 border-r-2 border-[#C6283D]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-5 left-5 h-4 w-4 border-b-2 border-l-2 border-[#C6283D]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-5 right-5 h-4 w-4 border-b-2 border-r-2 border-[#C6283D]"
                    />

                    <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#303039] bg-[#1A1A22] shadow-inner">
                      <User className="h-10 w-10 text-[#C6283D]" aria-hidden="true" />
                    </div>
                    <p className="font-display text-2xl font-bold tracking-tight text-[#F5F5F5]">
                      {PORTFOLIO_CONFIG.fullName}
                    </p>
                    <p className="mt-1.5 text-sm text-[#92929D]">
                      MIIT · BE (Hons) Computer Science
                    </p>
                    <p className="mt-4 font-mono text-xs text-[#92929D]/80">
                      Ready for {PORTFOLIO_CONFIG.profileImagePath}
                    </p>
                  </div>
                )}

                {/* Bottom contrast scrim over portrait */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#101014]/95 via-[#101014]/55 to-transparent"
                />

                {/* Flip instruction footer bar */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4">
                  <span className="text-xs font-medium tracking-wider text-[#F5F5F5]/90">
                    {PORTFOLIO_CONFIG.initials} · 2027
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider text-[#F5F5F5] transition-colors group-hover:text-[#F04455]">
                    <span>CLICK TO FLIP</span>
                    <RotateCw className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-90" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>

            {/* BACK SIDE */}
            <div
              className={`flip-backface-hidden flip-rotate-y-180 absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#C6283D]/55 bg-[#1A1A22] p-6 sm:p-7 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)] ${
                shouldReduceMotion && !isFlipped ? 'pointer-events-none opacity-0' : 'opacity-100'
              }`}
              style={
                shouldReduceMotion
                  ? { transform: 'none', transition: 'opacity 150ms ease' }
                  : undefined
              }
            >
              {/* Top accent line */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#C6283D]/20 via-[#C6283D] to-[#C6283D]/20"
              />

              <div className="space-y-4 overflow-y-auto pr-1">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5]">
                    {PROFILE_BACK_FACTS.heading}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#92929D]">
                    {PROFILE_BACK_FACTS.bio}
                  </p>
                </div>

                <div className="border-t border-[#303039] pt-3.5">
                  <p className="mb-2.5 text-xs font-semibold tracking-wider text-[#C6283D]">
                    Quick Facts
                  </p>
                  <dl className="space-y-2.5">
                    {PROFILE_BACK_FACTS.quickFacts.map((fact) => (
                      <div key={fact.label} className="text-xs sm:text-[13px] leading-snug">
                        <dt className="font-medium text-[#92929D]">{fact.label}</dt>
                        <dd className="mt-0.5 font-medium text-[#F5F5F5] tabular-nums">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-[#303039] pt-3.5">
                <span className="text-xs text-[#92929D]">MIIT · Mandalay</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider text-[#F04455]">
                  <span>CLICK TO FLIP BACK</span>
                  <RotateCw className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </motion.div>
        </button>
      </div>
    </div>
  );
}
