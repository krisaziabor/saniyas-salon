"use client";

import PageShell from "@/components/PageShell";
import SectionHeading from "@/components/SectionHeading";
import { castMembers } from "@/data/cast";
import { crewMembers } from "@/data/crew";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import { HomeEntranceContext } from "@/components/PageShell";

const HOME_CREW_COUNT = 4;
const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;

/** Four-step content stagger: 0 = date/location, 1 = synopsis, 2 = cast, 3 = crew */
export default function Home() {
  const crewPreview = crewMembers.slice(0, HOME_CREW_COUNT);
  const { contentStagger, contentDuration, isHome, reducedMotion } =
    useContext(HomeEntranceContext);

  const staggerMs = isHome && !reducedMotion ? Math.max(contentStagger, 300) : 0;
  const delay = (step: number) => (step * staggerMs) / 1000;

  return (
    <PageShell pathname="/">
      {/* 1. Date and location — full width at top */}
      <motion.div
        className="text-[#EEB363] mb-8 lg:mb-10 text-base font-bold uppercase"
        style={{ fontFamily: "var(--font-lector)" }}
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: contentDuration,
          delay: delay(0),
          ease: EASE_OUT,
        }}
      >
        <p className="tracking-wide">FEB 26–28</p>
        <p className="tracking-wide mt-1">SAYBROOK UNDERBROOK</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12">
        {/* 2. Synopsis — left column */}
        <motion.div
          className="text-[#EEB363]"
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: contentDuration,
            delay: delay(1),
            ease: EASE_OUT,
          }}
        >
          <SectionHeading>Synopsis</SectionHeading>
          <p className="text-base lg:text-lg leading-relaxed max-w-[45ch] tracking-tight">
            In suburban Georgia, Ritu runs a waxing salon while raising her teenage daughter, Saniya. As customers, neighbors, and love interests drift in and out, the salon becomes a crossroads of love and hurt for the brown women who enter it. When Saniya begins to question the beauty rituals her mother depends on, both women must ask what legacies they&apos;re willing to keep— and what they&apos;re ready to leave behind.
          </p>
        </motion.div>

        {/* 3. Cast + 4. Crew — right column, stacked */}
        <div className="text-[#EEB363] flex flex-col gap-8 lg:gap-10">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: contentDuration,
              delay: delay(2),
              ease: EASE_OUT,
            }}
          >
            <SectionHeading>Cast</SectionHeading>
            <ul className="space-y-1.5">
              {castMembers.map((member) => (
                <li key={member.character}>
                  <span className="font-semibold">{member.actor}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/cast"
              className="inline-block mt-3 text-sm uppercase hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-diatype)", color: "#EEB363" }}
            >
              Meet the Cast →
            </Link>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: contentDuration,
              delay: delay(3),
              ease: EASE_OUT,
            }}
          >
            <SectionHeading>Crew</SectionHeading>
            <ul className="space-y-1.5">
              {crewPreview.map((member) => (
                <li key={`${member.role}-${member.name}`}>
                  <span className="font-semibold">{member.name}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/crew"
              className="inline-block mt-3 text-sm uppercase hover:opacity-70 transition-opacity"
              style={{ fontFamily: "var(--font-diatype)", color: "#EEB363" }}
            >
              Meet the full crew →
            </Link>
          </motion.div>
        </div>
      </div>
    </PageShell>
  );
}
