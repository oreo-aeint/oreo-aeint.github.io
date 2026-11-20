import { motion, useReducedMotion } from 'motion/react';
import { Code2, Smartphone, Database, Wrench } from 'lucide-react';
import { SKILL_GROUPS, type SkillGroup } from '../data/portfolioData';

function SkillIcon({ name }: { name: SkillGroup['iconName'] }) {
  const iconClass = 'h-5 w-5 text-[#C6283D]';
  switch (name) {
    case 'code':
      return <Code2 className={iconClass} aria-hidden="true" />;
    case 'smartphone':
      return <Smartphone className={iconClass} aria-hidden="true" />;
    case 'database':
      return <Database className={iconClass} aria-hidden="true" />;
    case 'wrench':
      return <Wrench className={iconClass} aria-hidden="true" />;
  }
}

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-y border-[#303039] bg-[#16161D] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-[#C6283D]">Capabilities</p>
          <h2
            id="skills-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl"
          >
            Technical Skills
          </h2>
          <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#92929D]">
            Languages, frameworks, backend platforms, and tools I actively build with across
            academic and personal software projects.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, index) => (
            <motion.div
              key={group.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl border border-[#303039] bg-[#1A1A22] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C6283D]/60"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#303039] bg-[#16161D] transition-colors group-hover:border-[#C6283D]/50">
                <SkillIcon name={group.iconName} />
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-[#F5F5F5]">
                {group.title}
              </h3>

              <ul className="mt-4 space-y-2.5 border-t border-[#303039] pt-4">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center justify-between text-sm text-[#92929D] transition-colors group-hover:text-[#F5F5F5]"
                  >
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
