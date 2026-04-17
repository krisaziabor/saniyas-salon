"use client";

import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import { castMembers } from "@/data/cast";
import { crewMembers } from "@/data/crew";
import { motion } from "framer-motion";
import { useContext } from "react";
import { HomeEntranceContext } from "@/components/PageShell";

const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;

/** Home content stagger: 0 = cast, 1 = crew */
export default function Home() {
  const { contentStagger, contentDuration, isHome, reducedMotion } =
    useContext(HomeEntranceContext);

  const staggerMs = isHome && !reducedMotion ? Math.max(contentStagger, 300) : 0;
  const delay = (step: number) => (step * staggerMs) / 1000;

  return (
    <PageShell pathname="/">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        <motion.div
          className="text-aor-title text-[0.8125rem]"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: contentDuration,
            delay: delay(0),
            ease: EASE_OUT,
          }}
        >
          <SectionHeading>Cast</SectionHeading>
          <ul className="space-y-1">
            {castMembers.map((member) => (
              <li key={member.character}>
                <span className="font-name">{member.actor}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="text-aor-title text-[0.8125rem]"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: contentDuration,
            delay: delay(1),
            ease: EASE_OUT,
          }}
        >
          <SectionHeading>Crew</SectionHeading>
          <ul className="space-y-1">
            {crewMembers.map((member) => (
              <li key={`${member.role}-${member.name}`}>
                <span className="font-name">{member.name}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </PageShell>
  );
}
